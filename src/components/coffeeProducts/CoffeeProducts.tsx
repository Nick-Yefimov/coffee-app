import { useAppSelector } from '../../hooks/reduxHook';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './coffeeProducts.scss';

import Skeleton from '../skeleton/Skeleton';
import { filteredCoffeeSelector } from '../../store/selectors/coffee.selector';
import { searchStringSelector } from '../../store/selectors/search.selector';
import { getCoffeeBySearch } from '../../utils/coffee-search.utils';
import { Coffee } from '../../models/coffee';

interface CoffeeProps {
    coffee: Coffee[];
}

const CoffeeProducts: React.FC<CoffeeProps> = ({ coffee }: CoffeeProps) => {
    const { status} = useAppSelector(state => state.coffee);


    const skeleton: JSX.Element[] = [...new Array(6)].map((index: number) => <Skeleton key={index}/>)
    const products: JSX.Element[] = coffee.map(({id, title, country, price, image}) => {
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
    });

    return (
        <div className="product">
            <div className='product__wrapper'>
                {status ? skeleton : products}
            </div>
         </div>
    )
}

export default CoffeeProducts;