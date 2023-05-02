import { Coffee } from "../models/coffee";
import { FilterButtonsState } from "../models/filter";

export const getCoffeeByFilters = (filter: FilterButtonsState, coffee: Coffee[]): Coffee[] => {
    return coffee.filter(({ country }: Coffee) => country.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
};

