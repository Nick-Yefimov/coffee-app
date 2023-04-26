import AboutCoffee from '../../aboutCoffee/AboutCoffee';
import AboutUs from '../../aboutUs/AboutUs';
import CoffeeBest from '../../coffeeBest/CoffeeBest';
import Footer from '../../footer/Footer';


const MainPage: React.FC = () => {
    return (
        <>
            <AboutCoffee/>
            <AboutUs/>
            <CoffeeBest/>
            <Footer/>
        </>
    )
}

export default MainPage;