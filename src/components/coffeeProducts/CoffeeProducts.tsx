import { useAppSelector } from '../../hooks/reduxHook';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './coffeeProducts.scss';

import Skeleton from '../skeleton/Skeleton';
import { filterCoffeeProducts } from '../../features/coffeeSlice';

const CoffeeProducts = () => {
    const { status} = useAppSelector(state => state.coffee);
    const filteredCoffeeProducts = useAppSelector(filterCoffeeProducts)

    const skeleton: JSX.Element[] = [...new Array(6)].map((i) => <Skeleton key={i}/>)
    const products = filteredCoffeeProducts.map(({id, title, country, price, image}) => {
            return (
                <TransitionGroup component='div'>
                    <CSSTransition
                        key={id}
                        timeout={0}
                        exit={false}
                        className='product__card card-exit-active card-active'>
                        <div className='product__card' key={id}>
                            <img src={image} alt={title} className='product__logo'/>
                            <p className='product__name'>{title}</p>
                            <p className='product__region'>{country}</p>
                            <p className='product__price'>{price}$</p>
                        </div>  
                    </CSSTransition>
                </TransitionGroup>
            ) 
    })

    return (
        <div className="product">
            <div className='product__wrapper'>
                {status ? skeleton : products}
            </div>
         </div>
    )
}

export default CoffeeProducts;