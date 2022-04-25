import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'stat-contacts-fond',
  templateUrl: './contacts-fond.component.html',
  styleUrls: ['./contacts-fond.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsFondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
