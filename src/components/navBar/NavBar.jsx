import coffeeBeans from '../../resources/img/coffee-beans.png';

import { Link } from 'react-router-dom';

import './navBar.scss';

const NavBar = () => {
    return (
        <div className="nav">
            <img src={coffeeBeans} alt="logo" />
            <Link to='/' className="nav__link">Coffee house</Link>
            <Link to='/ourCoffee' className="nav__link nav__mid">Our coffee</Link>
            <a href="#" className="nav__link">For your pleasure</a>
        </div>
    )   
}

export default NavBar;