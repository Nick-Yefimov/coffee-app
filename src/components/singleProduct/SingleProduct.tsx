import black from '../../resources/img/coffe-logo-black.png';
import aromistico from '../../resources/img/aromistico-big.jpg';
import './singleProduct.scss';


const SingleProduct = () => {
    return (                       
      <div className='single'>
            <img src={aromistico} alt="beans" className='single__img'/>
            <div className='single__wrapper'>
                <h2 className='single__title'>About it</h2>
                <div className='inner'>
                    <hr className='inner__line'/>
                    <img src={black} alt="black" className='inner__logo' />
                    <hr className='inner__line'/>
                </div>
                <div className='single__container'>
                    <p className='single__country'>Country: Brasil</p>
                    <p className='single__descr'>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='single__price'>Price: 16.99$</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;