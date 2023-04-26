import CoffeeHeader from "../../coffeeHeader/CoffeeHeader";
import Footer from "../../footer/Footer";
import SingleProduct from "../../singleProduct/SingleProduct";

const SingleCoffeePage: React.FC = () => {
    return (
        <>
            <CoffeeHeader/>
            <SingleProduct/>
            <Footer/>
        </>
    )
}

export default SingleCoffeePage;