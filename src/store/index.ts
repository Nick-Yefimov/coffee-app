import { configureStore } from '@reduxjs/toolkit';
import coffeeSlice from '../features/coffeeSlice';
import  filterSlice  from '../features/filterSlice';

const store = configureStore({
    reducer: {
        coffee: coffeeSlice,
        filter: filterSlice,
    },
    middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(),
    devTools: process.env.NODE_ENV !== 'production'
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;