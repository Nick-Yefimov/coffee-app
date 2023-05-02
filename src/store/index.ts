import { configureStore } from '@reduxjs/toolkit';
import coffeeSlice from './slices/coffeeSlice';
import filterSlice from './slices/filterSlice';
import searchSlice from './slices/searchSlice';

const store = configureStore({
    reducer: {
        coffee: coffeeSlice,
        filter: filterSlice,
        searchString: searchSlice
    },
    middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(),
    devTools: process.env.NODE_ENV !== 'production'
    })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;