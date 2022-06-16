import { Action } from "@ngrx/store";

import { Child, UpdateChild } from "src/app/server/Date/child";

export const SET_ALL_CHILDREN = "[CHILD]SET_ALL_CHILDREN";
export const SET_CHILD_ID = "[CHILD]SET_CHILD_ID";
export const DONATE_CHILD = "[HELP]DONATE_CHILD";
export const DONATE_CHILD_SUCCSESS = "[HELP]DONATE_CHILD_SUCCSESS";

export class SetAllChildrenAction implements Action {
    public readonly type = SET_ALL_CHILDREN;

    constructor(public childList: Child[]) {}
}

export class SetChildIdAction implements Action {
    public readonly type = SET_CHILD_ID;

    constructor(public childId: Child[]) {}
}

export class DonateChildAction implements Action {
    public readonly type = DONATE_CHILD;

    constructor(public donChild: UpdateChild, public idChild: number) {}
}

export class DonateChildSuccsessAction implements Action {
    public readonly type = DONATE_CHILD_SUCCSESS;

    constructor(public donChild: UpdateChild, public idChild: number) {}
}

export type FondActions = SetAllChildrenAction | SetChildIdAction | DonateChildAction | DonateChildSuccsessAction;