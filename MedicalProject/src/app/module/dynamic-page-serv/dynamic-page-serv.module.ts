import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenComponent } from './children/children.component';
import { ChildComponent } from './child/child.component'; 

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChildrenComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    ChildrenComponent,    
  ]
})
export class DynamicPageServModule { }
