import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { useHttp, coffee } from "../hooks/http.hook";
import { RootState } from "../store";

interface CoffeeState {
    data: coffee[];
    status: boolean;
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
                state.status = false;
                state.error = action.error.message as string; 
            })
            .addDefaultCase(() => {});
    }
})

export default coffeeSlice.reducer;

export const filterCoffeeProducts = createSelector( 
    (state: RootState) => state.filter.activeFilter,
    (state: RootState) => state.coffee.data,
    (filter, coffee) => {
        if (filter === 'all') {
            return coffee;
        } else {
            return coffee.filter((item: coffee) => item.country === filter)
        }
    }
)



