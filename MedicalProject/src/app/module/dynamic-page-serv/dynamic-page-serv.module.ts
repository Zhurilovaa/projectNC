import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule} from 'src/app/app-routing/app-routing.module';

import { ChildrenComponent } from './children/children.component';
import { ChildComponent } from './child/child.component'; 
import { DonateHelpComponent } from './donate-help/donate-help.component';
import { FormDonateComponent } from './form-donate/form-donate.component';

@NgModule({
  declarations: [
    ChildrenComponent,
    ChildComponent,    
    DonateHelpComponent,    
    FormDonateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    ChildrenComponent,    
  ]
})
export class DynamicPageServModule { }
