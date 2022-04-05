import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StatiсsPageModule } from './module/statiсs-page/statiсs-page.module';
import { DynamicPageServModule } from './module/dynamic-page-serv/dynamic-page-serv.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MainMenuComponent } from './menu-fond/main-menu/main-menu.component';
import { FooterComponent } from './menu-fond/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainMenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    StatiсsPageModule,
    DynamicPageServModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
