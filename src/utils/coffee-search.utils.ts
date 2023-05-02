import { Coffee } from "../models/coffee";


export const getCoffeeBySearch = (searchString: string, coffee: Coffee[]): Coffee[] => {
    return coffee.filter(({ title }: Coffee) => title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()));
};