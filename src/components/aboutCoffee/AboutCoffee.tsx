import whiteBeans from '../../resources/img/coffe-beans-white.png';


import NavBar from '../navBar/NavBar';

import './aboutCoffee.scss';


const AboutCoffee = () => {
    return (
        <div className="about">
            <NavBar/>
            <div className="about__wrapper">
                <h1 className="about__title">Everything You Love About Coffee</h1>
                    <div className="about__inner">
                        <img src={whiteBeans} alt="beans" />
                    </div>
                <div className="container">
                    <h2 className="container__subtitle">We makes every day full of energy and taste</h2>
                    <p className="container__text">Want to try our beans?</p>
                </div>
                <div className="about__button">
                    <div className="about__btn">More</div>
                </div>
            </div>
        </div>
    )
}

export default AboutCoffee;