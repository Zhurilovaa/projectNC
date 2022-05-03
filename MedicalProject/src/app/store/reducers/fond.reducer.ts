import { FondActions, fondUnion } from "../actions/fond.actions";
import { fondState, initialFondState } from "../state/fond.state";

export function fondReducer(
    currentState: fondState = initialFondState,
    action: fondUnion,
){
    switch(action.type){
        case FondActions.GetHelp:
            return {
                ...currentState,
                childUpdate: action.payload.childUpdate,
            };
        default:
            return currentState;
    }
}