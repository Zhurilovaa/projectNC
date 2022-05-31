import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu-head',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.less']
})
export class MainMenuComponent{

  getAdminWork():boolean{
    if(sessionStorage.getItem('admin') === 'true'){
      return true;
    }
    return false;
  }

}
