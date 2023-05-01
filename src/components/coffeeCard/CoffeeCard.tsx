import { Coffee } from '../../models/coffee';
import './coffeeCard.scss';

const CoffeeCard: React.FC<Coffee> = ({ image, title, price }: Coffee) => {
    return (
        <div className='coffee__card'>
            <img src={image} alt="solimo" className='coffee__logo' />
            <p className='coffee__name'>{ title }</p>
            <p className='coffee__price'>{ price }</p>
        </div>
    )
}

export default CoffeeCard;