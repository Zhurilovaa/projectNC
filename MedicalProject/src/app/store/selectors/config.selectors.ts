import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { ConfigState } from "../state/config.state";

const selectConfigState = (state: AppState): ConfigState => state.config;

export const selectConfig = createSelector(
    selectConfigState,
    (state:ConfigState)=> state.admin
);