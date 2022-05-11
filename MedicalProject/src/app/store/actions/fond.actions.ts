import { createAction, props } from "@ngrx/store";
import { Child } from "src/app/server/childDate/child";

export enum FondActions {
    getChildList = '[GetList] GetChildList',
    LoadChildList = '[GetList] LoadChildList',
    SuccessLoadChildList = '[GetListChild] SuccessLoadChildList',
    setDonateSumChild = '[setDonateSum] SetDonateSumChild',
}

//получить всех детей с сервера и передать в store(отлавливается эффектами)
export const getChildList = createAction(
    FondActions.getChildList,
    );

export const LoadChildList = createAction(
    FondActions.LoadChildList,
);

export const SuccessLoadChildList = createAction(
    FondActions.SuccessLoadChildList,
    props< {children: Child[] }>()
)

//отправить на сервер пожертвованную сумму(отлавливается эффектами)
export const setDonateSumChild = createAction(
    FondActions.setDonateSumChild,
    props<{ childId: number, donateSum: number }>()
);

/*
export class GetChildren implements Action{
    readonly type = FondActions.GetChildren;
}

export class GetHelp implements Action {
    readonly type = FondActions.GetHelp;

    constructor(public payload: UpdateChildInfoDTO){}
}

export type fondActions = GetHelp | GetChildren;
*/
