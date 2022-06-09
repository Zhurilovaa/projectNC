import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  public edithForm: FormGroup=new FormGroup({
    newsArray: new FormArray([
      new FormControl('проверка')
    ])
  });

  constructor(private cserv: ConfigService, private ref: ChangeDetectorRef, private fb:FormBuilder) { }

  ngOnInit(): void { 
    console.log("вход")   
    this.content$ = this.cserv.getNewsContent();    
  }

  ngDoCheck(): void{
    this.adminWork = !!sessionStorage.getItem('admin'); 
    //по другому пока не перерисовывается компонент 
    this.ref.markForCheck();  
  }

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

  edithNewsSubmit(){

  }
   
}
