import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Child, UpdateChild } from 'src/app/server/childDate/child';
import { FondService } from 'src/app/server/service/fond.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-form-donate',
  templateUrl: './form-donate.component.html',
  styleUrls: ['./form-donate.component.less']
})
export class FormDonateComponent implements OnInit {
  
  childList$!: Observable<Child[]>;

  //реактивная форма
  formChild: FormGroup = new FormGroup({
    donate: new FormControl(null, [Validators.required, this.donateRangeValidator])
  });

  constructor(public fserv: FondService, private store: Store<AppState>,private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.childList$ = this.fserv.getAllChildren();
    
  }

  // валидатор проверки суммы доната в диапазоне от 0.1 до 10 000 
  donateRangeValidator(control: AbstractControl): ValidationErrors | null {
    const inputDonate = +(control.value);
    const minDonate: number = 0.1;
    //const maxDonate: number = 10000.0;
    /*if (inputDonate > maxDonate) {
        return {
            "requiredMark<": maxDonate,
            "inputMark: ": inputDonate
        };
    }*/
    if (inputDonate < minDonate) {
        return {
            "requiredMark>": minDonate,
            "inputMark: ": inputDonate
        };
    }
    return null;
  }
  sentDonate(): void {
    if (this.formChild.valid){
      const donateCurr = +(this.formChild.value.donate);
      // создаем новый объект updateChild
      const currChild = new UpdateChild(donateCurr);
      let id = this.activateRoute.snapshot.params['id'];
      console.log('id = '+ id.toString());

      this.fserv.donateChildById(id,currChild);
    }
  }
  
}
