import {coffee} from "../../hooks/http.hook";
import './coffeeCard.scss';

const CoffeeCard: React.FC<coffee> = ({ image, title, price }: coffee) => {
    return (
        <div className='coffee__card'>
            <img src={image} alt="solimo" className='coffee__logo' />
            <p className='coffee__name'>{ title }</p>
            <p className='coffee__price'>{ price }</p>
        </div>
    )
}

export default CoffeeCard;