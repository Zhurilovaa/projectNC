import { ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'main-menu-head',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent{

  constructor(private ref: ChangeDetectorRef){}

  getAdminWork():boolean{
    if(sessionStorage.getItem('admin') === 'true'){
      return true;
    }
    return false;
  }

  exitAdmin(){
    if(sessionStorage.getItem('admin')){
      sessionStorage.removeItem('admin'); 
    }
  }

}
