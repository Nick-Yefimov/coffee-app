import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { SearchState } from "../../models/search";

export const searchStringSelector = createSelector(
    (state: RootState) => state.searchString,
    ({ searchString }: SearchState): string => searchString
);