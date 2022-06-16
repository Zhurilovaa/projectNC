import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'stat-reports-fond',
  templateUrl: './reports-fond.component.html',
  styleUrls: ['./reports-fond.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsFondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
