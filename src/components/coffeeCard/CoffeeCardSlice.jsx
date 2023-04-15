import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { useHttp } from "../../hooks/http.hook";

export const fetchCoffee = createAsyncThunk(
    'coffeeData/fetchCoffee', 
    async () => {
        const {request} = useHttp();
        // return response.json();
        return request('http://localhost:3001/coffee') 
})


export const CoffeeCardSlice = createSlice({
    name: 'coffee',
    initialState: {
        coffeeData: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoffee.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCoffee.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
            })
            .addCase(fetchCoffee.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
            });
    } 
})


export default CoffeeCardSlice.reducer;

