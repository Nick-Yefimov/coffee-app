import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";


export const fetchCoffee = createAsyncThunk(
    'coffee/fetchCoffee',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/coffee")
    }
)

// export const fetchCoffee = createAsyncThunk(
//     'coffee/fetchCofee',
//     async () => {
//         const res = await fetch("http://localhost:3001/coffee")
//         const data = await res.json();
//         return data;
//     }
// )



export const  coffeeSlice = createSlice({
    name: 'coffee',
    initialState: {
        coffeeData: [],
        status: 'idle',
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder 
            .addCase(fetchCoffee.pending, state => {state.status = 'loading'})
            .addCase(fetchCoffee.fulfilled, (state, action) => {
                state.status = false;
                state.coffeeData = action.payload;
            })
            .addCase(fetchCoffee.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; 
            })
            .addDefaultCase(() => {});
    }
})

export default coffeeSlice.reducer;