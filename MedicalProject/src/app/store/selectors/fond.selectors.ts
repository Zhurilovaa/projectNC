import { createSelector } from "@ngrx/store";
import { AppState, childState } from "../state/fond.state";

export const getChildList = (state: AppState) => state.childrenFond;

export const childListSelector = createSelector(
  getChildList,
  (state:childState)=>state.children
)