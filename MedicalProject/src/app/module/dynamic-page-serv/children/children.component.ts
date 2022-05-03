import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of, Subject, Subscription, switchMap, take } from 'rxjs';
import { Child } from 'src/app/server/childDate/child';
import { FondService } from 'src/app/server/service/fond.service';
import { GetHelp } from 'src/app/store/actions/fond.actions';
import { selectChildrenList } from 'src/app/store/selectors/fond.selectors';
import { fondState } from 'src/app/store/state/fond.state';

@Component({
  selector: 'dynamic-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildrenComponent implements OnInit, AfterViewInit{

  public children: Observable<Child[]> = of([]);

  public childrenSubject: Subject<void> = new Subject();

  public idC: number = -1;
  public donateC: number = 0;

  private putS: Subscription | undefined;

  constructor(private fondServ: FondService, private ref: ChangeDetectorRef, private store: Store) { 

    this.store
      //.pipe(select(selectChildrenList))
      .subscribe((state)=>console.log(state));

    /*this.store.dispatch(
      new GetHelp(
        {
          childUpdate: {
            idChild: this.idC,
            donateSum: this.donateC,
          }
        }
      )
    );*/

  }


  ngOnInit(): void {
    //this.getData();

    this.children = this.childrenSubject.pipe(switchMap(()=>this.fondServ.getAllChildren()))
  }

  ngAfterViewInit(){
    this.getData();
  }

  getData(){  
    this.childrenSubject.next();
    /*this.children = this.fondServ.getAllChildren(); 
    this.ref.markForCheck();*/
  }  

  donate(){
    if(this.putS){
      this.putS.unsubscribe();
    }
    this.putS = this.fondServ.putChild(+(this.idC), +(this.donateC)).pipe(take(1)).subscribe(()=>{
      this.getData();
    });  

  }
}
