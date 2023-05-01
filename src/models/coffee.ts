export interface Coffee {
    id: number | string;
    title: string;
    price: number;
    country: string;
    image: string;
    description: string;
};

export interface CoffeeState {
    data: Coffee[];
    status: boolean;
    error: string | null;
}