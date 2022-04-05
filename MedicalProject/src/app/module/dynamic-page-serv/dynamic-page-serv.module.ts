import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenComponent } from './children/children.component';


@NgModule({
  declarations: [
    ChildrenComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    ChildrenComponent,    
  ]
})
export class DynamicPageServModule { }
