//import { Observable, of } from "rxjs";
//import { config } from "process";
import { Child, UpdateChildInfoDTO } from "src/app/server/childDate/child";
/*
export interface Config{
    adminName: string;
    permission?: string[]; 
}
*/
//Хранилище
export interface fondState{
    children: Child[];
    childUpdate: UpdateChildInfoDTO;
}

//начальное состояние хранилища
export const initialFondState: fondState = {
    children: [],
    childUpdate: new UpdateChildInfoDTO(),
};
/*
export interface configState{
    config: Config;
}

export const initialConfigState: configState = {
    config: {
        adminName: '',
    },
};
*/
//Общее хранилище приложения
export interface AppState{
    fond: fondState;
    //conf: configState;
}

export const initialAppState: AppState = {
    fond: initialFondState,
    //conf: initialConfigState,
};

export function getInitialState(){
    return initialAppState;
}
