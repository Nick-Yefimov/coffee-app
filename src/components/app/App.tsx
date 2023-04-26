import MainPage from "../pages/mainPage/MainPage";
import CoffeePage from "../pages/coffeePage/CoffeePage";
import PleasurePage from "../pages/plesaurePage/PleasurePage";
import ErrorPage from '../pages/errorPage/ErorrPage';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../../style/style.scss";
import SingleProduct from "../singleProduct/SingleProduct";
import { useAppDispatch } from "../../hooks/reduxHook";
import { fetchCoffee } from "../../features/coffeeSlice";
import React, { useEffect } from "react";

const App: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCoffee());
    }, [])

    return (
        <Router>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
                <Route path='/ourCoffee' element={<CoffeePage/>}/>
                <Route path='/coffeePleasure' element={<PleasurePage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
                <Route path='/singleProduct/:id' element={<SingleProduct />} />
			</Routes>
        </Router>
    )
}

export default App;