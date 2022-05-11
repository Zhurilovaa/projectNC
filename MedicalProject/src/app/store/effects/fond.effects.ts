import { Injectable } from "@angular/core";
import { of, switchMap } from "rxjs";
import { FondActions, GetChildren } from "../actions/fond.actions";
import { FondService } from "src/app/server/service/fond.service";
import { Child } from "src/app/server/childDate/child";
import { Effect } from "@ngrx/effects"; 
/*
@Injectable()
export class FondEffects {
    
    @Effect()
    getChildren$ = this.actions$.pipe(
        ofType<GetChildren>(FondActions.GetChildren),
        switchMap(()=>this.fServ.getAllChildren()),
    );

    constructor(private fServ: FondService, private actions$: Actions){}
}
*/
