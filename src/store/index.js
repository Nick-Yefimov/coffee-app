import { configureStore } from '@reduxjs/toolkit';
import coffeeCardReducer from '../components/coffeeCard/CoffeeCardSlice';


const stringMiddleWare = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};


const store = configureStore({
    reducer: {
        coffee: coffeeCardReducer
    },
    middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(stringMiddleWare),
    devTools: process.env.NODE_ENV !== 'production'
    
})



export default store;