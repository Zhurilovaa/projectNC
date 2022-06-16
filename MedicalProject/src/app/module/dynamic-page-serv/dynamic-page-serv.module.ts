import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule} from 'src/app/app-routing/app-routing.module';

import { ChildrenComponent } from './children/children.component';
import { ChildComponent } from './child/child.component'; 
import { DonateHelpComponent } from './donate-help/donate-help.component';
import { FormDonateComponent } from './form-donate/form-donate.component';

import { FondService } from 'src/app/server/service/fond.service';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/app/store/state/app.state';
import { handleLog } from 'src/app/store/reducers/logger';
import { EffectsModule } from '@ngrx/effects';
import { FondEffects } from 'src/app/store/effects/fond.effects';

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
    ReactiveFormsModule,
    EffectsModule.forRoot([FondEffects]),
  ],
  exports:[
    ChildrenComponent,    
  ],
  providers: [{
    provide: FondService,
    //deps: [HttpClient, Store]
  }]
})
export class DynamicPageServModule { }
