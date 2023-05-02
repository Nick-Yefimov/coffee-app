import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";
import { Coffee, CoffeeState } from "../../models/coffee";

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
                state.data = action.payload as Coffee[];
            })
            .addCase(fetchCoffee.rejected, (state: CoffeeState, action) => {
                state.status = false;
                state.error = action.error.message as string; 
            })
            .addDefaultCase(() => {});
    }
})

export default coffeeSlice.reducer;



