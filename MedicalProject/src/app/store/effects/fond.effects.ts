import { HttpClient } from "@angular/common/http";
import { concatMap, pluck, map  } from "rxjs";
import { FondService } from "src/app/server/service/fond.service";

import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { DONATE_CHILD, SetAllChildrenAction } from "../actions/fond.actions";
import { AppState } from "../state/app.state";

import { environment } from "src/environments/environment";

import { Child, UpdateChild } from "src/app/server/childDate/child";

@Injectable({providedIn: "root"})
export class FondEffects {

    private childServerUrl = environment.childFondUrl;

    @Effect()
    donateChild$ = this.actions$.pipe(
        ofType(DONATE_CHILD),
        pluck("donChild"),
        concatMap(
            (donChild:UpdateChild, id:number) => {
                return this.http.put<Child[]>(`${this.childServerUrl}/${id.toString()}`, donChild)
                .pipe(
                    map( (newChildList) => {
                        return new SetAllChildrenAction(newChildList);
                    }),
                );
            }
        ),
    );

    constructor(
        private store: Store<AppState>,
        private actions$: Actions,
        private fondService: FondService,
        private http: HttpClient,
    ) {}

}