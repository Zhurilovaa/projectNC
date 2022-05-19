import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenComponent } from './children/children.component';
import { ChildComponent } from './child/child.component'; 
import { DonateHelpFormComponent } from './donate-help-form/donate-help-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from 'src/app/app-routing/app-routing.module';

@NgModule({
  declarations: [
    ChildrenComponent,
    ChildComponent,    
    DonateHelpFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    ChildrenComponent,    
  ]
})
export class DynamicPageServModule { }
