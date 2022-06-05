import { HttpClient } from "@angular/common/http";
import { concatMap, pluck, map  } from "rxjs";

import { ConfigService } from "src/app/server/service/config.service";

import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { AppState } from "../state/app.state";

import { environment } from "src/environments/environment";

import { News, Contacts } from "src/app/server/Date/config_date";

import { SetContactContentAction,SetNewsContentAction, SAVE_CHANGE_CONTACT, SAVE_CHANGE_NEWS, ADD_NEWS_CONTENT } from "../actions/config.actions";

@Injectable({providedIn: "root"})
export class ConfigEffects {

    private configServerUrl = environment.configFondUrl;

    @Effect()
    saveContact$ = this.actions$.pipe(
        ofType(SAVE_CHANGE_CONTACT),
        pluck("changeContactContent"),
        concatMap(
            (changeContactContent: Contacts[]) => {
                return this.http.put<Contacts[]>(`${this.configServerUrl}/contact`, changeContactContent)
                .pipe(
                    map( (newContacts) =>{
                        return new SetContactContentAction(newContacts);
                    }),
                );
            }
        )
    )

    @Effect()
    saveNews$ = this.actions$.pipe(
        ofType(SAVE_CHANGE_NEWS),
        pluck("changeNewsContent"),
        concatMap(
            (changeNewsContent: Contacts[]) => {
                return this.http.put<News[]>(`${this.configServerUrl}/news`, changeNewsContent)
                .pipe(
                    map( (newNews) =>{
                        return new SetNewsContentAction(newNews);
                    }),
                );
            }
        )
    )

    @Effect()
    addNews$ = this.actions$.pipe(
        ofType(ADD_NEWS_CONTENT),
        pluck("newNewsContent"),
        concatMap(
            (newNewsContent: News) => {
                return this.http.post<News[]>(`${this.configServerUrl}/news`, newNewsContent)
                .pipe(
                    map( (allNewNews) =>{
                        return new SetNewsContentAction(allNewNews);
                    }),
                );
            }
        )
    )

    constructor(
        private store: Store<AppState>,
        private actions$: Actions,
        private configService: ConfigService,
        private http: HttpClient,
    ) {}

}