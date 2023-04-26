import { RootState } from '../../store';
import { useEffect } from 'react';
import { fetchCoffee } from '../../features/coffeeSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { Link } from 'react-router-dom';
import { coffee } from '../../hooks/http.hook';

import CoffeeCard from '../coffeeCard/CoffeeCard';

import './coffeeBest.scss';

const CoffeeBest: React.FC = () => {

    const dispatch = useAppDispatch();
    const coffeeData: coffee[] = useAppSelector((state: RootState) => state.coffee.data);


    useEffect(() => {
        dispatch(fetchCoffee());
    }, [])
    
    return (
        <div className='coffee'>
            <div className='coffee__title'>
                <h2 className='coffee__text'>Our Best </h2>
            </div>
            <div className='coffee__wrapper'>
                { coffeeData.map((coffeeCard: coffee) => <Link to={`/singleProduct/${coffeeCard.id}`} state={coffeeCard}> <CoffeeCard { ...coffeeCard } key={coffeeCard.id} /> </Link>) }
            </div>
        </div>
    )
}

export default CoffeeBest;