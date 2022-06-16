import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FondService } from '../server/service/fond.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent{
  //childList: Child[] = [];

  /*child: Child = {
      id: 0,
      name: "***",
      patronym: "****",
      surname: "*****",
      needSum: 1,
      donatSum: 0,
  };*/

  constructor(private fondService: FondService, private ref: ChangeDetectorRef){}
  /*
  addChild(newCh: Child){
    this.fondService.addData(newCh);
  }

  ngOnInit(){
    this.childList = this.fondService.getData();
  }*/

}
