import { ActionReducerMap } from "@ngrx/store";
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
}