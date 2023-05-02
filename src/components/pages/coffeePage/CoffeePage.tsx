import Footer from '../../footer/Footer';
import CoffeeHeader from "../../coffeeHeader/CoffeeHeader";
import CoffeeFilter from '../../coffeeFilter/CoffeeFilter';
import CoffeeProducts from '../../coffeeProducts/CoffeeProducts';
import { Coffee } from '../../../models/coffee';
import { useAppSelector } from '../../../hooks/reduxHook';
import { filteredCoffeeSelector } from '../../../store/selectors/coffee.selector';
import { searchStringSelector } from '../../../store/selectors/search.selector';
import { getCoffeeBySearch } from '../../../utils/coffee-search.utils';

const CoffeePage: React.FC = () => {
    const filteredCoffeeProducts: Coffee[] = useAppSelector(filteredCoffeeSelector);
    const searchString: string = useAppSelector(searchStringSelector);
    const coffee: Coffee[] = getCoffeeBySearch(searchString, filteredCoffeeProducts);

    return (
        <div>
            <CoffeeHeader/>
            <CoffeeFilter/>
            <CoffeeProducts coffee={coffee} />
            <Footer/>
        </div>
    )
}

export default CoffeePage;