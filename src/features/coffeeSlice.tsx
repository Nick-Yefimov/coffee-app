import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

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
    status: true | false;
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
    status: false,
    error: null,
} as CoffeeState


export const  coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder 
            .addCase(fetchCoffee.pending, state => {state.status = true})
            .addCase(fetchCoffee.fulfilled, (state: CoffeeState, action) => {
                state.status = false;
                state.data = action.payload as coffee[];
            })
            .addCase(fetchCoffee.rejected, (state: CoffeeState, action) => {
                state.status = true;
                state.error = action.error.message as string; 
            })
            .addDefaultCase(() => {});
    }
})

export default coffeeSlice.reducer;