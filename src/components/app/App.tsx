import MainPage from "../pages/mainPage/MainPage";
import CoffeePage from "../pages/coffeePage/CoffeePage";
import PleasurePage from "../pages/plesaurePage/PleasurePage";
import ErrorPage from '../pages/errorPage/ErorrPage';
import SingleCoffeePage from "../pages/singleCoffeePage/SingleCoffeePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHook";
import { fetchCoffee } from "../../store/slices/coffeeSlice";
import React, { useEffect } from "react";

import "../../style/style.scss";
import { fetchFilter } from "../../store/slices/filterSlice";

const App: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCoffee());
        dispatch(fetchFilter());
    }, [])

    return (
        <Router>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
                <Route path='/ourCoffee' element={<CoffeePage/>}/>
                <Route path='/coffeePleasure' element={<PleasurePage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
                <Route path='/singleProduct/:id' element={<SingleCoffeePage />} />
			</Routes>
        </Router>
    )
}

export default App;