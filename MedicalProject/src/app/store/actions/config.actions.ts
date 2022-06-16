import { Action } from "@ngrx/store";

import { Contacts, News } from "src/app/server/Date/config_date";

export const SET_CONTACTS_CONTENT = '[CONTENT]SET_CONTACTS_CONTENT';
export const SET_NEWS_CONTENT = '[CONTENT]SET_NEWS_CONTENT';

export const SAVE_CHANGE_CONTACT = "[CONTACT]SAVE_CHANGE_CONTACT";
export const SAVE_CHANGE_CONTACT_SUCCSESS = "[CONTACT]SAVE_CHANGE_CONTACT_SUCCSESS";

export const SAVE_CHANGE_NEWS = "[NEWS]SAVE_CHANGE_NEWS";
export const SAVE_CHANGE_NEWS_SUCCSESS = "[NEWS]SAVE_CHANGE_NEWS_SUCCSESS";

export const ADD_NEWS_CONTENT = "[NEWS]ADD_NEWS_CONTENT";
export const ADD_NEWS_CONTENT_SUCCSESS = "[NEWS]ADD_NEWS_CONTENT_SUCCSESS";



export class SetContactContentAction implements Action{
    public readonly type = SET_CONTACTS_CONTENT;

    constructor(public contactContent: Contacts[]) {}
}

export class SetNewsContentAction implements Action{
    public readonly type = SET_NEWS_CONTENT;

    constructor(public newsContent: News[]) {}
}

export class SaveChangeContactAction implements Action {
    public readonly type = SAVE_CHANGE_CONTACT;

    constructor(public changeContactContent: Contacts[]) {}
}

export class SaveChangeContactSuccsessAction implements Action {
    public readonly type = SAVE_CHANGE_CONTACT_SUCCSESS;

    constructor(public changeContactContent: Contacts[]) {}
}

export class SaveChangeNewsAction implements Action {
    public readonly type = SAVE_CHANGE_NEWS;

    constructor(public changeNewsContent: News[], public id: string) {}
}

export class SaveChangeNewsSuccsessAction implements Action {
    public readonly type = SAVE_CHANGE_NEWS_SUCCSESS;

    constructor(public changeNewsContent: News[], public id: string) {}
}

export class AddNewsAction implements Action {
    public readonly type = ADD_NEWS_CONTENT;

    constructor(public newNewsContent: News, public id: string) {}
}

export class AddNewsSuccsessAction implements Action {
    public readonly type = ADD_NEWS_CONTENT_SUCCSESS;

    constructor(public newNewsContent: News, public id: string) {}
}


export type ConfigActions = SetContactContentAction| SetNewsContentAction | SaveChangeContactAction | SaveChangeContactSuccsessAction  | SaveChangeNewsAction | SaveChangeNewsSuccsessAction | AddNewsAction | AddNewsSuccsessAction;


