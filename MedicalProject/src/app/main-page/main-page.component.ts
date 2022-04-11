import { Component, OnInit } from '@angular/core';
import { Child } from '../server/childDate/child';
import { FondService } from '../server/service/fond.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent{
  childList: Child[] = [];

  child: Child = {
      id: 0,
      name: "***",
      patronym: "****",
      surname: "*****",
      needSum: 1,
      donatSum: 0,
  };

  constructor(private fondService: FondService){}

  addChild(newCh: Child){
    this.fondService.addData(newCh);
  }

  ngOnInit(){
    this.childList = this.fondService.getData();
  }

}
