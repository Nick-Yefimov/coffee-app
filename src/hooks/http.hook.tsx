export interface coffee {
  id: number | string;
  title: string;
  price: number;
  country: string;
  image: string;
  description: string;
};

export interface filter {
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


export const useHttp = () => {
	const request = async (
		url: string, 
		method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', 
		body = null, 
		headers = {Accept: 'application/json'}
		): Promise<coffee[] | filter[] | string[]> => {
		try {
			const response = await fetch(url, {method, body, headers});

			if (!response.ok) {
				throw new Error(`Error! status: ${response.status}`);
		  	}
	  
			const result = (await response.json()) as coffee[] | filter[];
	  
			// console.log('result is: ', JSON.stringify(result, null, 4));
	  
			return result;
		} catch (error) {
		  if (error instanceof Error) {
			console.log('error message: ', error.message);
			return [error.message];
		  } else {
				console.log('unexpected error: ', error);
				return ['An unexpected error occurred'];
		  }
		}
		
	  }
	return {request}
}


