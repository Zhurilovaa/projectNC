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

  public idC: number = -1;
  public donateC: number = 0;

  private putS: Subscription | undefined;

  constructor(private fserv: FondService, private ref: ChangeDetectorRef){}


  ngOnInit(): void {
    this.childList$ = this.fserv.getAllChildren();
    //this.children = this.childrenSubject.pipe(switchMap(()=>this.fondServ.getAllChildren()))
  }
  /*
  ngAfterViewInit(){
    this.getData();
  }
 
  getData(){  
    this.childrenSubject.next();
  }  
  */
  donate(){
    if(this.putS){
      this.putS.unsubscribe();
    } 

  }
}
