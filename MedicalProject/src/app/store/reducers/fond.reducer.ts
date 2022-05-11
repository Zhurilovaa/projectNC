import { Action, createReducer, on } from "@ngrx/store";
import { SuccessLoadChildList} from "../actions/fond.actions";
import { childState,initialAppState} from "../state/fond.state"


//редьюсер интересует только action по получению детей с сервера
const childFondReducer = createReducer(
    initialAppState.childrenFond,
    on(SuccessLoadChildList, (state, {children}) => ({children}))    
);

export function reducer(state: childState | undefined, action: Action): any {
    return reducer(state, action);
}



/*import { ActionReducerMap } from "@ngrx/store";
import { FondActions, fondActions } from "../actions/fond.actions";
import { AppState, fondState, initialFondState } from "../state/fond.state";

export function fondReducer(
    currentState: fondState = initialFondState,
    action: fondActions,
):fondState{
    switch(action.type){
        case FondActions.GetHelp:
            return {
                ...currentState,
                childUpdate: action.payload,
            };
        default:
            return currentState;
    }
}

export const appReducers: ActionReducerMap<AppState, any> ={
    fond: fondReducer,
}*/