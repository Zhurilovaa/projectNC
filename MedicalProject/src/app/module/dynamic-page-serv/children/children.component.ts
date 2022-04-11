import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from 'src/app/server/childDate/child';
import { FondService } from 'src/app/server/service/fond.service';

@Component({
  selector: 'dynamic-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.less']
})
export class ChildrenComponent{

  children: Child[] = [];

  constructor(private fondServ: FondService) {}

  ngOnInit(){

    

  }  
}
