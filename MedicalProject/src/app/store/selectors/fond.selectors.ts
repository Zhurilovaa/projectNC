import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { fondAdapter, FondState } from "../state/fond.state"

export const { selectAll } = fondAdapter.getSelectors();

const selectChildState = (state: AppState): FondState => state.children;

export const selectChildren = createSelector(
    selectChildState,
    (state:FondState)=> state.childList
);

export const selectChildID = createSelector(
    selectChildState,
    (state: FondState) => state.childId
);