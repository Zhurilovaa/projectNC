import { FondState, initialFondState } from "./fond.state";
import { fondReducer } from "../reducers/fond.reducer";

export interface AppState{
    children: FondState
}

export const initialAppState: AppState = {
    children: initialFondState
};

export function getInitialState(): AppState{
    return initialAppState;
}

export const appReducers: any = {
    children: fondReducer
};
