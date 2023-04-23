import logo from '../../resources/img/coffee-logo-black.png';
import black from '../../resources/img/coffe-logo-black.png';
import './footer.scss';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
		<div className='container'>
			<div className='footer'>
				<img src={logo} alt="logo"/>
				<Link to='/' className="footer__link">Coffee house</Link>
            	<Link to='/ourCoffee' className="footer__link footer__mid">Our coffee</Link>
				<Link to='coffeePleasure' className="footer__link">For your pleasure</Link>
			</div>
			<div className='inner'>
				<hr className='inner__line'/>
				<img src={black} alt="black" className='inner__logo' />
				<hr className='inner__line'/>
			</div>	
		</div>	
    )
}

export default Footer;