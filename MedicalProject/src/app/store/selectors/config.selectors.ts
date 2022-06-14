import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { ConfigState } from "../state/config.state";

const selectConfigState = (state: AppState): ConfigState => state.config;

export const selectContactConfig = createSelector(
    selectConfigState,
    (state:ConfigState)=> state.contactContent
);

export const selectNewsConfig = createSelector(
    selectConfigState,
    (state:ConfigState)=> state.newsContent
);