import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutFoundComponent } from './about-found/about-found.component';
import { NewsFondComponent } from './news-fond/news-fond.component';
import { NewsBlockComponent } from './news-block/news-block.component';
import { ContactsFondComponent } from './contacts-fond/contacts-fond.component';

import { AppRoutingModule} from 'src/app/app-routing/app-routing.module';

import { ActualAdressPipe, BusinessAdressPipe } from 'src/app/pipes/address.pipe';
import { InputValidStyleDirective, StyleFormHeadDirective, StyleFormTrDirective } from 'src/app/directives/input.directive';
import { DateNewsPipe } from 'src/app/pipes/date.pipe';


@NgModule({
  declarations: [
    AboutFoundComponent,
    NewsFondComponent,
    ContactsFondComponent,
    ActualAdressPipe,
    BusinessAdressPipe,
    DateNewsPipe,
    InputValidStyleDirective,
    StyleFormTrDirective,
    StyleFormHeadDirective,
    NewsBlockComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule, //маршуртизация 
    ReactiveFormsModule,
  ],
  exports:[
    AboutFoundComponent,
    NewsFondComponent,
    ContactsFondComponent,
  ],
})
export class StatiсsPageModule { }
