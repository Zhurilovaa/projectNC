import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutFoundComponent } from './about-found/about-found.component';
import { ReportsFondComponent } from './reports-fond/reports-fond.component';
import { GetHelpFondComponent } from './get-help-fond/get-help-fond.component';
import { ProjectFondComponent } from './project-fond/project-fond.component';
import { NewsFondComponent } from './news-fond/news-fond.component';
import { ContactsFondComponent } from './contacts-fond/contacts-fond.component';
import { PartnersFondComponent } from './partners-fond/partners-fond.component';
import { AppRoutingModule} from 'src/app/app-routing/app-routing.module';
import { ActualAdressPipe, BusinessAdressPipe } from 'src/app/pipes/adress.pipe';
import { LoginOutGuard } from 'src/app/app-routing/login.guard';
import { InputValidStyleDirective, StyleFormTrDirective } from 'src/app/directives/input.directive';


@NgModule({
  declarations: [
    AboutFoundComponent,
    ReportsFondComponent,
    GetHelpFondComponent,
    ProjectFondComponent,
    NewsFondComponent,
    ContactsFondComponent,
    PartnersFondComponent,
    ActualAdressPipe,
    BusinessAdressPipe,
    InputValidStyleDirective,
    StyleFormTrDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule, //маршуртизация 
    ReactiveFormsModule,
  ],
  exports:[
    AboutFoundComponent,
    ReportsFondComponent,
    GetHelpFondComponent,
    ProjectFondComponent,
    NewsFondComponent,
    ContactsFondComponent,
    PartnersFondComponent,
  ],
})
export class StatiсsPageModule { }
