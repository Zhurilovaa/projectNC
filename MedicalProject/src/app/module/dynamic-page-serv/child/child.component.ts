import { ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Child } from 'src/app/server/childDate/child';

@Component({
  selector: 'dynamic-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit{

  @Input() childCurr: Child = new Child;

  public nameChild: string;
  public status: boolean;
  public idChild: string;

  constructor(private router: Router) {}

  ngOnInit(){
    this.nameChild = this.childCurr.name + " " + this.childCurr.patronym + " " + this.childCurr.surname;
    this.idChild = String(this.childCurr.id);
    if(this.childCurr.donatSum < this.childCurr.needSum){
      this.status = false;
    }
    else{
      this.status = true;
    }
  }
}
