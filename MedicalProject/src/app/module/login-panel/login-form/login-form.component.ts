import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/store/state/app.state';
import { Admin } from 'src/app/server/Date/admin';
import { selectConfig } from 'src/app/store/selectors/config.selectors';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  private dataAdmin: Observable<Admin>;
  private popUpSucsses: boolean = false;
  private popUpNotSucsses: boolean = false;

  //реактивная форма
  loginForm: FormGroup = new FormGroup({
    adminName: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    adminPass: new FormControl(null, [Validators.required, Validators.minLength(1)])
  });

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.dataAdmin = this.store.select(selectConfig);
  }

  login(): void{
    if (this.loginForm.valid){
      const nameAdmin: string = this.loginForm.value.adminName;
      const passwordAdmin: string = this.loginForm.value.adminPass;

      //const trueName: boolean = (this.dataAdmin.adminName===nameAdmin) ? true : false;      

      //console.log("trueName ",trueName);

      //const truePass: boolean = (this.dataAdmin.adminPassword===passwordAdmin) ? true : false;       

      //console.log("truePass ",truePass);

      if(nameAdmin === 'admin' && passwordAdmin==='pass'){
        sessionStorage.setItem('admin','true');
      }

      switch(sessionStorage.getItem('admin')){
        case "true":
          this.popUpSucsses = true;
          break;
        case "false":
          this.popUpNotSucsses = true;
          break;
        default:
          break;
      }
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
