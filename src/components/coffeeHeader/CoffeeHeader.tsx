import NavBar from '../navBar/NavBar';
import './coffeeHeader.scss';

const CoffeeHeader = () => {
    return (
			<div className='header'>
				<NavBar/>
				<h1 className='header__title'>Our Coffee</h1>
			</div>
    )
}

export default CoffeeHeader;