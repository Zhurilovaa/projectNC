import { Action } from "@ngrx/store";
import { UpdateChildInfoDTO } from "src/app/server/childDate/child";

export enum FondActions {
    GetHelp = '[HelpPage] GetHelp',
  
}

export class GetHelp implements Action {
    readonly type = FondActions.GetHelp;

    constructor(public payload: {childUpdate:UpdateChildInfoDTO}){}
}

export type fondUnion = GetHelp;

