import MainPage from "../pages/mainPage/MainPage";
import CoffeePage from "../pages/coffeePage/CoffeePage";
import PleasurePage from "../pages/plesaurePage/PleasurePage";
import ErrorPage from '../pages/errorPage/ErorrPage';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../../style/style.scss";

const App = () => {
    return (
        <Router>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
                <Route path='/ourCoffee' element={<CoffeePage/>}/>
                <Route path='/coffeePleasure' element={<PleasurePage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
			</Routes>
        </Router>
        
    )
}

export default App;