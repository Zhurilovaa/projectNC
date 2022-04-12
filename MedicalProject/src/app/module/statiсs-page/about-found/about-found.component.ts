import { Component, OnInit } from '@angular/core';

import { Child } from 'src/app/server/childDate/child';
import { FondService } from 'src/app/server/service/fond.service';

@Component({
  selector: 'stat-about-found',
  templateUrl: './about-found.component.html',
  styleUrls: ['./about-found.component.less']
})
export class AboutFoundComponent{

  public content:string = 'aboutFond';

  changeContent(con:string){
    this.content = con;
  }
  
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
