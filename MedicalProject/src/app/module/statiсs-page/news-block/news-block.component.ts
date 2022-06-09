import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/server/Date/config_date';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsBlockComponent implements OnInit {
  
  @Input() newsCurr: News;

  constructor( private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

    
  }

}
