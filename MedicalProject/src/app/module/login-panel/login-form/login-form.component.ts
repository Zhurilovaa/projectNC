import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/store/state/app.state';

import { ConfigService } from 'src/app/server/service/config.service';

import { AdminLogin } from 'src/app/server/Date/config_date';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  //private dataAdmin: Observable<Admin>;
  private popUpSucsses: boolean = false;
  private popUpNotSucsses: boolean = false;

  //реактивная форма
  loginForm: FormGroup = new FormGroup({
    adminName: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    adminPass: new FormControl(null, [Validators.required, Validators.minLength(1)])
  });

  constructor(private store: Store<AppState>, private configServ: ConfigService) { }

  ngOnInit(): void {
    //this.dataAdmin = this.store.select(selectConfig);
  }

  login(): void{
    if (this.loginForm.valid){
      const nameAdmin: string = this.loginForm.value.adminName;
      const passwordAdmin: string = this.loginForm.value.adminPass;

      const loginAttempt: AdminLogin = {
        login: nameAdmin,
        password: passwordAdmin,
      }   
      this.configServ.login(loginAttempt); 
      /*
      ???????? как вывести сообщения и надо ли?
      if(sessionStorage.getItem('admin')){
        console.log("зашел");
        this.popUpSucsses = true;
      }
      else{
        this.popUpNotSucsses = true;
      }
      */
    }
     
  }

  getPopUpSucsses(): boolean{
    return this.popUpSucsses;
  }

  getPopUpNotSucsses(): boolean{
    return this.popUpNotSucsses;
  }

  resetMyForm(): void{
    this.popUpNotSucsses = false;
    this.loginForm.reset();
  }

}
