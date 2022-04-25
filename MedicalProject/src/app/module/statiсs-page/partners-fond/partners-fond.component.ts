import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'stat-partners-fond',
  templateUrl: './partners-fond.component.html',
  styleUrls: ['./partners-fond.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersFondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
