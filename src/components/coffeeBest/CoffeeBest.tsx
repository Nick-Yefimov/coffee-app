import { RootState } from '../../store';
import { useAppSelector } from '../../hooks/reduxHook';
import { Link } from 'react-router-dom';

import CoffeeCard from '../coffeeCard/CoffeeCard';

import './coffeeBest.scss';
import { Coffee } from '../../models/coffee';
import { getCoffeeByLimitSelector } from '../../store/selectors/coffee.selector';

const CoffeeBest: React.FC = () => {
    const coffeeData: Coffee[] = useAppSelector(getCoffeeByLimitSelector(3));
    
    return (
        <div className='coffee'>
            <div className='coffee__title'>
                <h2 className='coffee__text'>Our Best </h2>
            </div>
            <div className='coffee__wrapper'>
                {coffeeData.map((coffeeCard: Coffee) => 
                    <Link
                        className='link' 
                        to={`/singleProduct/${coffeeCard.id}`} 
                        state={coffeeCard}> 
                        <CoffeeCard 
                        { ...coffeeCard } 
                        key={coffeeCard.id} /> 
                    </Link>) 
                }
            </div>
        </div>
    )
}

export default CoffeeBest;