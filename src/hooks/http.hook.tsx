import { Coffee } from "../models/coffee";
import { Filter } from "../models/filter";


export const useHttp = () => {
	const request = async (
		url: string, 
		method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', 
		body = null, 
		headers = {Accept: 'application/json'}
		): Promise<Coffee[] | Filter[] | string[]> => {
		try {
			const response = await fetch(url, {method, body, headers});

			if (!response.ok) {
				throw new Error(`Error! status: ${response.status}`);
		  	}
	  
			const result = (await response.json()) as Coffee[] | Filter[];
	  
			return result;
		} catch (error) {
		  if (error instanceof Error) {
			return [error.message];
		  } else {
				return ['An unexpected error occurred'];
		  }
		}
		
	  }
	return {request}
}


