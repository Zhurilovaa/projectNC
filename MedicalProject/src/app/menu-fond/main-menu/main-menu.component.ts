import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'main-menu-head',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent{

  @Input() admin: boolean = false;

  constructor(private ref: ChangeDetectorRef){}

  exitAdmin(){
    if(sessionStorage.getItem('admin')){
      sessionStorage.removeItem('admin');
      this.admin=false; 
    }
  }
}
