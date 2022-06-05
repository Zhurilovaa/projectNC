import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


import { AppRoutingModule} from './app-routing/app-routing.module';
import { StatiсsPageModule } from './module/statiсs-page/statiсs-page.module';
import { DynamicPageServModule } from './module/dynamic-page-serv/dynamic-page-serv.module';
import { LoginPanelModule } from './module/login-panel/login-panel.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainMenuComponent } from './menu-fond/main-menu/main-menu.component';
import { FooterComponent } from './menu-fond/footer/footer.component';

import { ConfigService } from './server/service/config.service';

import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/state/app.state';
import { handleLog } from './store/reducers/logger';
import { EffectsModule } from '@ngrx/effects';
import { FondEffects } from './store/effects/fond.effects';
import { Store } from '@ngrx/store';
import { LoginOutGuard } from './app-routing/login.guard';
import { ConfigEffects } from './store/effects/config.effects';

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
    LoginPanelModule, //админ панель
    RouterModule,
    StoreModule.forRoot(appReducers, {
      metaReducers: [handleLog]
    }),
    EffectsModule.forRoot([ConfigEffects]),
    AppRoutingModule,  //маршуртизация
  ],
  providers: [
    {
      provide: ConfigService,
      deps: [HttpClient, Store]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
