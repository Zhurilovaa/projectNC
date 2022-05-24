import { Child } from "src/app/server/childDate/child";

import { createEntityAdapter } from "@ngrx/entity"

export interface FondState{
    childList: Child[];
    childId: Child[];
}

export const initialFondState: FondState = {
    childList: [],
    childId: [],
};

export const fondAdapter = createEntityAdapter<Child>({    
    selectId: (child) => child.id,
});