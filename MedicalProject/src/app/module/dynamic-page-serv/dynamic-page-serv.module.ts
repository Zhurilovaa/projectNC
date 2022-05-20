import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenComponent } from './children/children.component';
import { ChildComponent } from './child/child.component'; 
import { DonateHelpComponent } from './donate-help/donate-help.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from 'src/app/app-routing/app-routing.module';
import { FormDonateComponent } from './form-donate/form-donate.component';
import { ReactiveFormsModule } from '@angular/forms';

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
