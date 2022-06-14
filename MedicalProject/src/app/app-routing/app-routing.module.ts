import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

import { MainPageComponent } from '../main-page/main-page.component';

import { ChildrenComponent } from '../module/dynamic-page-serv/children/children.component';
import { DonateHelpComponent } from '../module/dynamic-page-serv/donate-help/donate-help.component';
import { FormDonateComponent } from '../module/dynamic-page-serv/form-donate/form-donate.component';
import { LoginFormComponent } from '../module/login-panel/login-form/login-form.component';
import { AboutFoundComponent } from '../module/statiсs-page/about-found/about-found.component';
import { ContactsFondComponent } from '../module/statiсs-page/contacts-fond/contacts-fond.component';
import { NewsFondComponent } from '../module/statiсs-page/news-fond/news-fond.component';

import { ConfigOutGuard } from './config.guard';
import { DonateInGuard } from './donate.guard';

//import { GetHelpFondComponent } from '../module/statiсs-page/get-help-fond/get-help-fond.component';
//import { PartnersFondComponent } from '../module/statiсs-page/partners-fond/partners-fond.component';
//import { ProjectFondComponent } from '../module/statiсs-page/project-fond/project-fond.component';
//import { ReportsFondComponent } from '../module/statiсs-page/reports-fond/reports-fond.component';

const routes: Routes = [ 
  {
    path: 'about/:content',
    component: AboutFoundComponent,
  },  
  {
    path: 'about',
    redirectTo: '/about/aboutFond',
  },
  {
    path: 'news',
    component: NewsFondComponent,
    canDeactivate: [ConfigOutGuard],
  },
  {
    path: 'children',
    component: ChildrenComponent,
  },
  {
    path: 'conyacts/admin',
    component: ContactsFondComponent,
  },
  {
    path: 'contacts',
    component: ContactsFondComponent,
    canDeactivate: [ConfigOutGuard],
  },
  {
    path: 'donateHelp/:id',
    component: FormDonateComponent,
    canActivate: [DonateInGuard],
    //нужен защитник на переход!
  },
  {
    path: 'donateHelp',
    component: DonateHelpComponent,
  }, 
  {
    path: 'admin',
    component: LoginFormComponent,
  }, 
  { 
    path: '**', 
    component: MainPageComponent,
  },
];

//export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [   
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  bootstrap:[AppComponent],
})
export class AppRoutingModule { }
