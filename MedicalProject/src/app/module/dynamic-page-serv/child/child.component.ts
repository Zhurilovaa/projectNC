import { Component, Input, OnInit} from '@angular/core';
import { Child } from 'src/app/server/childDate/child';

@Component({
  selector: 'dynamic-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit{

  @Input() childCurr: Child = new Child;

  public nameChild: string;
  public status: boolean;

  constructor() {}

  ngOnInit(){
    this.nameChild = this.childCurr.name + " " + this.childCurr.patronym + " " + this.childCurr.surname;
    if(this.childCurr.donatSum < this.childCurr.needSum){
      this.status = false;
    }
    else{
      this.status = true;
    }
  }

}
