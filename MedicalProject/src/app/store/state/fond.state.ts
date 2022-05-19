import { Child } from "src/app/server/childDate/child";


//import { createEntityAdapter } from "@ngrx/entity";

export interface FondState{
    childList: Child[];
}

export const initialFondState: FondState = {
    childList: []
};

//export const fondAdapter = createEntityAdapter<Child>