import { createSelector } from "@ngrx/store";
import { fondState } from "../state/fond.state";

const selectChildren = (state: fondState) => state;

export const selectChildrenList = createSelector(
  selectChildren,
  (state: fondState) => state.children,
);