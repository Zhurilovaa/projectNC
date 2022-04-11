import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Child } from 'src/app/server/childDate/child';
import { FondService } from 'src/app/server/service/fond.service';

@Component({
  selector: 'dynamic-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.less']
})
export class ChildrenComponent{

  children: Child[] = [];
  public childTemp: Observable<Child[]> = of([]);

  constructor(private fondServ: FondService) {}
 

  ngOnInit(){    
    this.children = this.fondServ.getData(); 
    //this.childTemp = this.fondServ.getChildL();
    this.childTemp = this.fondServ.getServData();
  }  
}
