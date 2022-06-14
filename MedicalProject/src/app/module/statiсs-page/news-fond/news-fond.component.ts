import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { News } from 'src/app/server/Date/config_date';
import { ConfigService } from 'src/app/server/service/config.service';


@Component({
  selector: 'stat-news-fond',
  templateUrl: './news-fond.component.html',
  styleUrls: ['./news-fond.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsFondComponent implements OnInit, DoCheck {

  public adminWork: boolean;

  public content$!: Observable<News[]>;

  public addNewsForm: FormGroup = new FormGroup({
    text: new FormControl(null, [Validators.required,Validators.minLength(1), Validators.pattern('[a-z A-z а-я А-Я ё Ё 0-9 \" \' \(\) \. \,]*')]),
  });

  public edithNewsValid: boolean[] = [];

  /*
  public edithNewsForm: FormGroup=new FormGroup({
    "newsText": new FormArray([])
  });
 */
  constructor(private cserv: ConfigService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {  
    
    this.content$ = this.cserv.getNewsContent().pipe(
      tap( (value: News[]) => {
        this.edithNewsValid = [];
        for(let i=0; i < value.length; i++){        
          this.edithNewsValid.push(true);
        }
      }
      )
    );
  }

  ngDoCheck(): void{
    this.adminWork = !!sessionStorage.getItem('admin'); 
    //по другому пока не перерисовывается компонент 
    this.ref.markForCheck();  
  }

  /*
  getFormsControls(): FormArray{
    return this.edithNewsForm.controls["newsText"] as FormArray;
  } 
 */
  addNewsSubmit(){
    if(this.addNewsForm.valid){
      const dateOfPublic = new Date();
      const textPublic = this.addNewsForm.value.text;

      const newNews: News = {
        dateOfPublication: dateOfPublic,
        text: textPublic,
      }

      this.addNewsForm.reset();

      this.cserv.addNewNews(newNews);
    }
  }

  getStatusFormsValid():boolean{
    let status = true;
    for(let st of this.edithNewsValid){
      if(!st){
        status=false;
      }
    }
    return status;
  }
  setStatusFormsValid(valid: boolean, id: number ){
    this.edithNewsValid[id] = valid;    
  }

  setNew(body: News, content: News[]){
    body.dateOfPublication = new Date(body.dateOfPublication);
    let index = content.findIndex((value)=> value.dateOfPublication.getTime()===body.dateOfPublication.getTime())
    content[index].text = body.text;

    
  }

  /*
  edithNewsSubmit(){

  }
   */
}
