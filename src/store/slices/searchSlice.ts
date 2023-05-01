import {createSlice} from "@reduxjs/toolkit";
import { SearchState } from "../../models/search";



const initialState = {
    searchString: '',
} as SearchState

export const searchSlice = createSlice({
    name: 'searchString',
    initialState,
    reducers: {
        searchStringChanged: ({ searchString }: SearchState, action) => {
            searchString = action.payload;
        }
    },
});

const { actions } = searchSlice;

export default searchSlice.reducer;
export const { searchStringChanged } = actions;