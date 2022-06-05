import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { AppState } from "src/app/store/state/app.state";

import { environment } from "src/environments/environment";
import { AdminLogin, News } from "../Date/config_date";



@Injectable()
export class ConfigService{

    private configUrl = environment.configFondUrl;

    public contactContent = [];
    public newsContent: News[] = [];    

    constructor(private http: HttpClient, private store: Store<AppState>){}

    login(body: AdminLogin){
        this.http.post(this.configUrl, body).subscribe( (answer) => {
            if(answer){
                sessionStorage.setItem('admin', 'true');                
            }           
        });       
    }

 
}