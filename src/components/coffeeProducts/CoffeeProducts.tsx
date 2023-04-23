import { fetchCoffee } from '../../features/coffeeSlice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import coffee from '../../hooks/http.hook';

import './coffeeProducts.scss';

import Skeleton from '../skeleton/Skeleton';
import { RootState } from '../../store';


const CoffeeProducts = () => {

    const dispatch = useAppDispatch();
    const loadingStatus: boolean = useAppSelector((state: RootState) => state.coffee.status);
    const coffeeData: coffee[] = useAppSelector((state: RootState) => state.coffee.data);


    useEffect(() => {
        dispatch(fetchCoffee());
    }, [])

    const skeleton: JSX.Element[] = [...new Array(6)].map((i) => <Skeleton key={i}/>)
    const products: JSX.Element[] = coffeeData.map((coffee) => {
        return (
            <div className='product__card' key={coffee.id}>
                <img src={coffee.image} alt={coffee.title} className='product__logo'/>
                <p className='product__name'>{coffee.title}</p>
                <p className='product__region'>{coffee.country}</p>
                <p className='product__price'>{coffee.price}$</p>
            </div>  
        )
    })
    return (
        <div className="product">
            <div className='product__wrapper'>
            {loadingStatus ? skeleton : products}
            </div>
        </div>
    )
}

export default CoffeeProducts;