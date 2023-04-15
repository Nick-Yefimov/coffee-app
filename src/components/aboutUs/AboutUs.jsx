
import './aboutUs.scss';

import blackBeans from '../../resources/img/coffe-logo-black.png';

const AboutUs = () => {
    return (
        <div className='us'>
            <h2 className='us__title'>About Us</h2>
            <div className='us__logo'>
                <img src={blackBeans} alt="black"/>
            </div>
            <div className='us__descr'>
                <p className='us__text'>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    <br/>is song that held help face.
                </p>
                <p className='us__p'>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much<br/>
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant<br/>
                    horrible but confined day end marriage. Eagerness furniture set preserved far<br/>
                    recommend. Did even but nor are most gave hope. Secure active living depend son<br/>
                    repair day ladies now.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;