import { useAppSelector } from "../../../hooks/reduxHook";
import { Coffee } from "../../../models/coffee";
import { RootState } from "../../../store";
import CoffeeHeader from "../../coffeeHeader/CoffeeHeader"
import CoffeeProducts from "../../coffeeProducts/CoffeeProducts"
import Footer from '../../footer/Footer';

import './pleasurePage.scss';


const PleasurePage: React.FC = () => {

    const coffee: Coffee[] = useAppSelector(({ coffee }: RootState) => coffee.data);

    return (
        <>
            <CoffeeHeader/>
            <CoffeeProducts coffee={coffee}/>
            <Footer/>
        </>
    )
}

export default PleasurePage;