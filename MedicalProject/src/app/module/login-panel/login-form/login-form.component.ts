import { ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/state/app.state';

import { ConfigService } from 'src/app/server/service/config.service';

import { AdminLogin } from 'src/app/server/Date/config_date';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent /*implements ComponentCanDeactivate */{

  //private dataAdmin: Observable<Admin>;
  private popUpSucsses: boolean = false;
  //private popUpNotSucsses: boolean = false;

  //реактивная форма
  loginForm: FormGroup = new FormGroup({
    adminName: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.pattern("[a-zA-Z]*")]),
    adminPass: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.pattern("[0-9 a-zA-Z]*")])
  });

  constructor(private store: Store<AppState>, private configServ: ConfigService, private route: Router, private ref: ChangeDetectorRef) { }

  /*canDeactivate() : boolean | Observable<boolean>{
     
    if(!this.sucssesOut()){
        return confirm("Вы хотите покинуть страницу?");
    }
    else{
      console.log("я здесь");
        return true;
    }
  }*/

  /*
  sucssesOut(){
    return sessionStorage.getItem('admin') ? true: false;
  }*/

  login(): void{
    if (this.loginForm.valid){
      const nameAdmin: string = this.loginForm.value.adminName;
      const passwordAdmin: string = this.loginForm.value.adminPass;

      const loginAttempt: AdminLogin = {
        login: nameAdmin,
        password: passwordAdmin,
      }  

      this.configServ.login(loginAttempt);  
      this.popUpSucsses = true;     
    }
     
  }

  getPopUpSucsses(): boolean{
    return this.popUpSucsses;
  }

  /*getPopUpNotSucsses(): boolean{
    return this.popUpNotSucsses;
  }*/

  resetMyForm(): void{
    this.popUpSucsses = false;
    this.loginForm.reset();
  }

}
