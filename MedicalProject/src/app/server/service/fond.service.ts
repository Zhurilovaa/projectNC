import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { AppState } from "src/app/store/state/app.state";
import { SetAllChildrenAction } from "src/app/store/actions/fond.actions";
import { selectChildren } from "src/app/store/selectors/fond.selectors";

import { environment } from "src/environments/environment";

import { Child, UpdateChild } from "../childDate/child";

@Injectable()
export class FondService{

    private childUrl = environment.childFondUrl;

    public childList: Child[] = [];

    constructor(private http: HttpClient, private store: Store<AppState>){
    }

    //получение списка детей с сервера
    getAllChildren():Observable<Child[]>{
        this.http.get<Child[]>(this.childUrl).subscribe( (childList) => {
            this.childList = childList;
            return this.store.dispatch(new SetAllChildrenAction(childList));
        });
        return this.store.select(selectChildren);
    }
    
    //внесение пожертвований
    donateChildById(id: number, donateCh: UpdateChild): number {
        const body: UpdateChild = {
            "donateSum": donateCh.donateSum,
        };

        this.http.put<Child[]>(`${this.childUrl}/${id.toString()}`, body).subscribe( (children) => {
            this.store.dispatch(new SetAllChildrenAction(children));
        });
        return 1;
    }
}