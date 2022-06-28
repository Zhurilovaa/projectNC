import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of, Subject, Subscription, switchMap} from 'rxjs';

import { Child } from 'src/app/server/Date/child';

import { FondService } from 'src/app/server/service/fond.service';


@Component({
  selector: 'dynamic-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildrenComponent implements OnInit{

  public childList$!: Observable<Child[]>;
  constructor(private fserv: FondService, private ref: ChangeDetectorRef){}

  ngOnInit(): void {
    this.childList$ = this.fserv.getAllChildren();
  }
}
