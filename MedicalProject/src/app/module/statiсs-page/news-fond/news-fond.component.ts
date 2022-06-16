import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from 'src/app/app-routing/config.guard';
import { News } from 'src/app/server/Date/config_date';
import { ConfigService } from 'src/app/server/service/config.service';


@Component({
  selector: 'stat-news-fond',
  templateUrl: './news-fond.component.html',
  styleUrls: ['./news-fond.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsFondComponent implements OnInit, DoCheck, ComponentCanDeactivate {

  public adminWork: boolean;

  public content$!: Observable<News[]>;

  public addNewsForm: FormGroup = new FormGroup({
    text: new FormControl(null, [Validators.required]),
  });

  public statusFormsBlock: boolean[] = [];

  constructor(private cserv: ConfigService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {      
    this.content$ = this.cserv.getNewsContent();
  }

  ngDoCheck(): void{
    this.adminWork = !!sessionStorage.getItem('admin'); 
    //по другому пока не перерисовывается компонент 
    this.ref.markForCheck(); 
  }

  setStatus(st: boolean, index: number){
    this.statusFormsBlock[index] = st;
  }

  addNewsSubmit(){
    if(this.addNewsForm.valid){
      const dateOfPublic = new Date();
      const textPublic = this.addNewsForm.value.text;

      const newNews: News = {
        id: '0',
        dateOfPublication: dateOfPublic,
        text: textPublic,
      }

      this.addNewsForm.reset();

      this.cserv.addNewNews(newNews);
    }
  }

  setNew(body: News, content: News[]){
    const index: number = content.findIndex((value)=> value.id === body.id)
    let edithNewsArray: News[] =[];
    for(let i=0; i<content.length; i++){
      if(i===index){
        edithNewsArray.push(body);
      }
      else edithNewsArray.push(content[i]);
    }
    this.cserv.edithNewsContent(edithNewsArray);
  }

  deleteNewsById(idDelete: string){
    this.cserv.deleteNewsIdContent(idDelete);
  }

  canDeactivate(): boolean | Observable<boolean> {
    const statusEdith = this.statusFormsBlock.includes(true);
    if(this.addNewsForm.dirty || statusEdith)
    {
      return confirm("Остались несохранённые изменения!\nВы хотите покинуть страницу, не сохранив их?");
    }
    else return true;
  }
}
