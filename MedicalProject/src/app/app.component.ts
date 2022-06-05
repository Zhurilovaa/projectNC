import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent { 
  getAdminWork():boolean{
    if(sessionStorage.getItem('admin') === 'true'){
      return true;
    }
    return false;
  }
}
