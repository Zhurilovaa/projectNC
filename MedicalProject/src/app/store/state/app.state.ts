import { FondState, initialFondState } from "./fond.state";
import { fondReducer } from "../reducers/fond.reducer";
import { ConfigState, initialConfigState } from "./config.state";

export interface AppState{
    children: FondState,
    config: ConfigState,
}

export const initialAppState: AppState = {
    children: initialFondState,
    config: initialConfigState,
};

export function getInitialState(): AppState{
    return initialAppState;
}

export const appReducers: any = {
    children: fondReducer,
};
