import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { News } from 'src/app/server/Date/config_date';
import { ConfigService } from 'src/app/server/service/config.service';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsBlockComponent implements OnInit {
  
  @Input() newsCurr: News;

  @Input() adminWork: boolean;

  @Output() edithValid = new EventEmitter<boolean>();

  @Output() edithNews= new EventEmitter<News>();


  public edithOrDaleteForm: FormGroup = new FormGroup({
    text: new FormControl('',[Validators.minLength(1), Validators.pattern('[a-z A-z а-я А-Я ё Ё 0-9 \" \' \(\) \. \, \n]*')])
  });

  constructor( private ref: ChangeDetectorRef, private cserv: ConfigService) { }

  ngOnInit(): void {
    this.edithOrDaleteForm.patchValue({
      text: this.newsCurr.text,
    })    
  }

  event(){
    if(this.edithOrDaleteForm.valid){
      const textTemp = this.edithOrDaleteForm.value.text;
      const news: News = {
        dateOfPublication: this.newsCurr.dateOfPublication,
        text: textTemp,
      }
      this.edithNews.emit(news);
    }    
    this.edithValid.emit(!this.edithOrDaleteForm.invalid);  

  }

  edithNewsSubmit(){

  }

}
