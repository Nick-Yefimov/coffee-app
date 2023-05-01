import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { getCoffeeByFilters } from "../../utils/coffee-filter.utils";
import { FilterButtonsState } from "../../models/filter";
import { Coffee } from "../../models/coffee";

export const filteredCoffeeSelector = createSelector( 
    (state: RootState) => state.filter.activeFilter,
    (state: RootState) => state.coffee.data,
    (filter: FilterButtonsState, coffee: Coffee[]): Coffee[] => filter === FilterButtonsState.ALL ? coffee : getCoffeeByFilters(filter, coffee)
);