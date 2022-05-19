import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { StatiсsPageModule } from './module/statiсs-page/statiсs-page.module';
import { DynamicPageServModule } from './module/dynamic-page-serv/dynamic-page-serv.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

import { AppRoutingModule} from './app-routing/app-routing.module';
import { MainMenuComponent } from './menu-fond/main-menu/main-menu.component';
import { FooterComponent } from './menu-fond/footer/footer.component';

import { FondService } from './server/service/fond.service';

import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/state/app.state';
import { handleLog } from './store/reducers/logger';
import { EffectsModule } from '@ngrx/effects';
import { FondEffects } from './store/effects/fond.effects';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainMenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, //работа с сервером
    StatiсsPageModule, //статичные страницы сайта
    DynamicPageServModule, //динамические страницы сайта
    RouterModule,
    StoreModule.forRoot(appReducers, {
      metaReducers: [handleLog]
    }),
    EffectsModule.forRoot([FondEffects]),
    AppRoutingModule,  //маршуртизация
  ],
  providers: [{
    provide: FondService,
    deps: [HttpClient, Store]
  }], //регистрация сервиса
  bootstrap: [AppComponent]
})
export class AppModule { }
