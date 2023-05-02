import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";
import { Filter, FilterButtonsState, FilterState } from "../../models/filter";


export const fetchFilter = createAsyncThunk(
    'filter/fetchFilter',
    async () => {
        const {request} = useHttp();
        return await request('http://localhost:3001/filters');
    }
)

const initialState = {
    data: [],
    activeFilter: FilterButtonsState.ALL,
    status: false,
    error: null,
} as FilterState

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterChanged: (state: FilterState, action) => {
            state.activeFilter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilter.pending, state => {state.status = true})
            .addCase(fetchFilter.fulfilled, (state: FilterState, action) => {
                state.status = false;
                state.data = action.payload as Filter[];         
            })
            .addCase(fetchFilter.rejected, (state: FilterState, action) => {
                state.status = false;
                state.error = action.error.message as string; 
            })
            .addDefaultCase(() => {});
    }
})

const { actions, reducer } = filterSlice;

export default reducer;
export const { filterChanged } = actions;



