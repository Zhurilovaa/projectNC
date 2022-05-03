import { Action } from "@ngrx/store";
import { UpdateChildInfoDTO } from "src/app/server/childDate/child";

export enum FondActions {
    GetHelp = '[HelpPage] GetHelp',
    GetChildren = '[Child] GetChildren',
}

export class GetChildren implements Action{
    readonly type = FondActions.GetChildren;
}

export class GetHelp implements Action {
    readonly type = FondActions.GetHelp;

    constructor(public payload: UpdateChildInfoDTO){}
}

export type fondActions = GetHelp | GetChildren;

