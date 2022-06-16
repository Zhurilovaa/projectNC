import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { News } from 'src/app/server/Date/config_date';
import { ConfigService } from 'src/app/server/service/config.service';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsBlockComponent implements OnInit{
  
  @Input() newsCurr: News;

  @Input() adminWork: boolean;

  @Output() statusForm = new EventEmitter<boolean>();

  @Output() edithNews = new EventEmitter<News>();

  @Output() deleteIdNews = new EventEmitter<string>();


  public edithOrDeleteForm: FormGroup = new FormGroup({
    text: new FormControl(null,[Validators.required])
  });

  constructor( private ref: ChangeDetectorRef, private cserv: ConfigService) { }

  ngOnInit(): void {
    this.edithOrDeleteForm.patchValue({
      text: this.newsCurr.text,
    })    
  }

  ngDoCheck(){
    this.statusForm.emit(this.edithOrDeleteForm.dirty);
  }

  eventEdith(){
    if(this.edithOrDeleteForm.valid){
      const textTemp = this.edithOrDeleteForm.value.text;
      const news: News = {
        id: this.newsCurr.id,
        dateOfPublication: this.newsCurr.dateOfPublication,
        text: textTemp,
      }
      this.edithOrDeleteForm.reset();
      this.edithNews.emit(news);
    }  
  }  
  eventDelete(){
    this.deleteIdNews.emit(this.newsCurr.id.toString());
  }                

}
