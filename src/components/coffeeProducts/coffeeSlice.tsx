import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";
import GetRequestResponse from '../../hooks/http.hook';
// import coffee from '../../hooks/http.hook';

interface coffee {
    id: number;
    title: string;
    price: number;
    country: string;
    image: string;
    description: string;
}

interface CoffeeState {
    data: coffee[];
    status: 'idle' | 'loading' | 'failed';
    error: string | null;
}


export const fetchCoffee = createAsyncThunk(
    'coffee/fetchCoffee',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/coffee")
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
} as CoffeeState

console.log('initialState', initialState)


export const  coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder 
            .addCase(fetchCoffee.pending, state => {state.status = 'loading'})
            .addCase(fetchCoffee.fulfilled, (state: CoffeeState, action) => {
                const payload: coffee[] = action.payload.data
                state.status = 'idle';
                // state.data = payload;
                
            })
            .addCase(fetchCoffee.rejected, (state: CoffeeState, action) => {
                state.status = 'failed';
                state.error = action.error.message; 
            })
            .addDefaultCase(() => {});
    }
})

export default coffeeSlice.reducer;