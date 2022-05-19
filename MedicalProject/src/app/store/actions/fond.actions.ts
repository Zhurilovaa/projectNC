import { Action } from "@ngrx/store";

import { Child, UpdateChild } from "src/app/server/childDate/child";

export const SET_ALL_CHILDREN = "[CHILD]SET_ALL_CHILDREN";
export const DONATE_CHILD = "[HELP]DONATE_CHILD";
export const DONATE_CHILD_SUCCSESS = "[HELP]DONATE_CHILD_SUCCSESS";

export class SetAllChildrenAction implements Action {
    public readonly type = SET_ALL_CHILDREN;

    constructor(public childList: Child[]) {}
}

export class DonateChildAction implements Action {
    public readonly type = DONATE_CHILD;

    constructor(public donChild: UpdateChild, public idChild: number) {}
}

export class DonateChildSuccsessAction implements Action {
    public readonly type = DONATE_CHILD_SUCCSESS;

    constructor(public donChild: UpdateChild, public idChild: number) {}
}

export type FondActions = SetAllChildrenAction | DonateChildAction | DonateChildSuccsessAction;