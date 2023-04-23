import coffee from '../../hooks/http.hook';
import black from '../../resources/img/coffe-logo-black.png';
import './singleProduct.scss';
import { useLocation } from 'react-router';


const SingleProduct: React.FC = () => {

    const { state } = useLocation();
    const { image, country, description, price } = state as coffee;

    return (                       
      <div className='single'>
            <img src={image} alt="beans" className='single__img'/>
            <div className='single__wrapper'>
                <h2 className='single__title'>About it</h2>
                <div className='inner'>
                    <hr className='inner__line'/>
                    <img src={black} alt="black" className='inner__logo' />
                    <hr className='inner__line'/>
                </div>
                <div className='single__container'>
                    <p className='single__country'>{ `Country: ${country}` }</p>
                    <p className='single__descr'>{ `Description: ${description}` }</p>
                    <p className='single__price'>{ `Price: ${price}` }</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;