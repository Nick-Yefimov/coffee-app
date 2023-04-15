import Footer from '../../footer/Footer';
import CoffeeHeader from "../../coffeeHeader/CoffeeHeader";
import CoffeeFilter from '../../coffeeFilter/CoffeeFilter';
import CoffeeProducts from '../../coffeeProducts/CoffeeProducts';

const CoffeePage = () => {
    return (
        <div>
            <CoffeeHeader/>
            <CoffeeFilter/>
            <CoffeeProducts/>
            <Footer/>
        </div>
    )
}

export default CoffeePage;