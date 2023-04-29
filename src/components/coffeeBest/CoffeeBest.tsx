import { RootState } from '../../store';
import { useAppSelector } from '../../hooks/reduxHook';
import { Link } from 'react-router-dom';
import { coffee } from '../../hooks/http.hook';

import CoffeeCard from '../coffeeCard/CoffeeCard';

import './coffeeBest.scss';

const CoffeeBest: React.FC = () => {
    const coffeeData: coffee[] = useAppSelector(({ coffee }: RootState) => coffee.data);
    const limitBestCoffee: coffee[] = coffeeData.slice(0, 3);
    
    return (
        <div className='coffee'>
            <div className='coffee__title'>
                <h2 className='coffee__text'>Our Best </h2>
            </div>
            <div className='coffee__wrapper'>
                {limitBestCoffee.map((coffeeCard: coffee) => 
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