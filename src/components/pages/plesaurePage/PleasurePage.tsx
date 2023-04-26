import CoffeeHeader from "../../coffeeHeader/CoffeeHeader"
import CoffeeProducts from "../../coffeeProducts/CoffeeProducts"
import Footer from '../../footer/Footer';

import cup from '../../../resources/img/cup.png';
import black from '../../../resources/img/coffe-logo-black.png'

import './pleasurePage.scss';


const PleasurePage: React.FC = () => {
    return (
        <>
            <CoffeeHeader/>
            <div className='pleasure'>
            <img src={cup} alt="beans" className='pleasure__img'/>
                <div className='pleasure__wrapper'>
                    <h2 className='pleasure__title'>About our goods</h2>
                    <div className='pleasure__container'>
                        <hr className='pleasure__line'/>
                        <img src={black} alt="black" className='pleasure__logo' />
                        <hr className='pleasure__line'/>
                    </div>
                </div>
            </div>
            <CoffeeProducts/>
            <Footer/>
        </>
    )
}

export default PleasurePage;