import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'stat-news-fond',
  templateUrl: './news-fond.component.html',
  styleUrls: ['./news-fond.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsFondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
