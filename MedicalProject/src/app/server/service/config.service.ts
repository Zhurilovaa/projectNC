import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { AppState } from "src/app/store/state/app.state";

import { SetContactContentAction, SetNewsContentAction } from "src/app/store/actions/config.actions";
import { selectContactConfig, selectNewsConfig } from "src/app/store/selectors/config.selectors";

import { environment } from "src/environments/environment";

import { Contacts, News, AdminLogin } from "../Date/config_date";



@Injectable()
export class ConfigService{

    private configUrl = environment.configFondUrl;

    public contactContent: Contacts[] = [];
    public newsContent: News[] = [];    

    constructor(private http: HttpClient, private store: Store<AppState>){}

    login(body: AdminLogin){
        this.http.post(this.configUrl, body).subscribe( (answer) => {
            if(answer){
                sessionStorage.setItem('admin', 'true');                
            }           
        });       
    }

    //получение контента
    getСontactContent():Observable<Contacts[]>{
        this.http.get<Contacts[]>(`${this.configUrl}/contact`).subscribe( (conTemp) => {
            this.contactContent = conTemp;
            return this.store.dispatch(new SetContactContentAction(conTemp));
        });
        return this.store.select(selectContactConfig);
    }
    getNewsContent():Observable<Contacts[]>{
        this.http.get<Contacts[]>(`${this.configUrl}/news`).subscribe( (newsTemp) => {
            this.contactContent = newsTemp;
            return this.store.dispatch(new SetContactContentAction(newsTemp));
        });
        return this.store.select(selectContactConfig);
    }

 
}