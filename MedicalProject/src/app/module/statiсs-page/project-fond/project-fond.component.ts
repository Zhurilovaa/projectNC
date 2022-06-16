import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'stat-project-fond',
  templateUrl: './project-fond.component.html',
  styleUrls: ['./project-fond.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
