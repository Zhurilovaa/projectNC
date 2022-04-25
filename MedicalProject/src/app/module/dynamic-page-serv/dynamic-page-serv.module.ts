import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenComponent } from './children/children.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChildrenComponent,

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
