import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { AppState } from "src/app/store/state/app.state";
import { SetAllChildrenAction, SetChildIdAction } from "src/app/store/actions/fond.actions";
import { selectChildren, selectChildID } from "src/app/store/selectors/fond.selectors";

import { environment } from "src/environments/environment";

import { Child, UpdateChild } from "../Date/child";

@Injectable()
export class FondService{

    private childUrl = environment.childFondUrl;

    public childList: Child[] = [];
    public childId: Child[] = [];

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

    getChildID(id:number):Observable<Child[]>{
        this.http.get<Child[]>(`${this.childUrl}/${id.toString()}`).subscribe( (childId) =>{
            this.childId = childId;
            return this.store.dispatch(new SetChildIdAction(childId));
        });
        return this.store.select(selectChildID);
    }
    
    //внесение пожертвований
    donateChildById(id: number, donateCh: UpdateChild): number {
        const body: UpdateChild = {
            "donateSum": donateCh.donateSum,
        };

        this.http.put<Child[]>(`${this.childUrl}/${id.toString()}`, body).subscribe( (children) => {
            this.store.dispatch(new SetAllChildrenAction(children));
            let childId = children.findIndex((value)=>value.id=== +id);
            this.store.dispatch(new SetChildIdAction(children.slice(childId, childId+1)));
        });
        return 1;
    }
}