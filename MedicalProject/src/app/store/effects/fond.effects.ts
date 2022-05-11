import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, switchMap } from "rxjs";
import { Child } from "src/app/server/childDate/child";
import { FondService } from "src/app/server/service/fond.service";
import { FondActions, SuccessLoadChildList } from "../actions/fond.actions";

//export const LoadChildren = 
@Injectable()
export class ChildrenEffects {
    
  loadList$ = createEffect(() =>
  this.actions$.pipe(
      ofType(FondActions.LoadChildList),
      switchMap(()=>this.fondServ.getAllChildren()),
      map((response: Child[])=> {
          return SuccessLoadChildList({children: response});
      }),
      catchError(() => EMPTY)
  ));

constructor(
    private actions$: Actions,
    private fondServ: FondService
  ) {}
}