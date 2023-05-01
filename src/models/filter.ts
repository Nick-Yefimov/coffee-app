export interface Filter {
	id: string;
	label: FilterButtonsState;
	name: string;
}

export enum FilterButtonsState {
	ALL = 'All',
	BRASIL = 'Brasil',
	KENYA = 'Kenya',
	COLUMBIA = 'Columbia'
}

export interface FilterState {
    data: Filter[],
    activeFilter: FilterButtonsState,
    status: boolean,
    error: null | string,
}