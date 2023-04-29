import CoffeeHeader from "../../coffeeHeader/CoffeeHeader"
import CoffeeProducts from "../../coffeeProducts/CoffeeProducts"
import Footer from '../../footer/Footer';

import './pleasurePage.scss';


const PleasurePage: React.FC = () => {
    return (
        <>
            <CoffeeHeader/>
            <CoffeeProducts/>
            <Footer/>
        </>
    )
}

export default PleasurePage;