import { FondState, initialFondState } from "./fond.state";
import { fondReducer } from "../reducers/fond.reducer";
import { ConfigState, initialConfigState } from "./config.state";
import { configReducer } from "../reducers/config.reducer";

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
    config: configReducer,
};
