import { Component, Input} from '@angular/core';
import { Child } from 'src/app/server/childDate/child';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent{

  @Input() childCurr: Child = new Child;

  constructor() { }

}
