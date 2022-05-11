//import { Observable, of } from "rxjs";
//import { config } from "process";
import { Child, UpdateChildInfoDTO } from "src/app/server/childDate/child";



//Хранилище фонда
export interface childState{
    children: Child[];
}

//начальное состояние хранилища фонда
export const initialChildState: childState = {
    children: [{
        id: 1,
        name: "Ева",
        patronym: "Михайловна",
        surname: "Котова",
        gender: "girl",
        needSum: 9308407,
        donatSum: 8875000,
    },
    {
        id: 2,
        name: "Дамир",
        patronym: "Артёмович",
        surname: "Скворцов",
        gender: "boy",
        needSum: 7223978,
        donatSum: 5924901,
    },]
};

//Общее хранилище приложения
export interface AppState{
    readonly childrenFond: childState;
}

//начальное состояние хранилища ghbkj;tybz
export const initialAppState: AppState = {
    childrenFond: initialChildState,
};