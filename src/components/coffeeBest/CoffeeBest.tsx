
import './coffeeBest.scss';

import solimo from '../../resources/img/solimo.png';

const CoffeeBest = () => {
    
    return (
        <div className='coffee'>
            <div className='coffee__title'>
                <h2 className='coffee__text'>Our Best </h2>
            </div>
            <div className='coffee__wrapper'>
                     <div className='coffee__card'>
                     <img src={solimo} alt="solimo" className='coffee__logo' />
                     <p className='coffee__name'>Solimo Coffee Beans 2 kg</p>
                     <p className='coffee__price'>10.73$</p>
                 </div>
                <div className='coffee__card'>
                    <img src={solimo} alt="solimo" className='coffee__logo' />
                    <p className='coffee__name'>Solimo Coffee Beans 2 kg</p>
                    <p className='coffee__price'>10.73$</p>
                </div>
                <div className='coffee__card'>
                    <img src={solimo} alt="solimo" className='coffee__logo' />
                    <p className='coffee__name'>Solimo Coffee Beans 2 kg</p>
                    <p className='coffee__price'>10.73$</p>
                </div>
            </div>
        </div>
    )
}

export default CoffeeBest;