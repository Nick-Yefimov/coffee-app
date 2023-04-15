import './coffeeProducts.scss';
import coffee from '../../resources/img/aromistico.png';


const CoffeeProducts = () => {

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('http://localhost:3001/coffee')
    //         const data = await response.json()
    //         setData(data); 
    //     }
    //     fetchData()
    // }, [])


    return (
            <div className="product">
                <div className='product__wrapper'>               
                    <div className='product__card'>
                        <img src={coffee} alt={coffee} className='product__logo' />
                        <p className='product__name'>AROMISTICO Coffee 1 kg</p>
                        <p className='product__region'>Brazil</p>
                        <p className='product__price'>6.99$</p>
                    </div>   
                    <div className='product__card'>
                        <img src={coffee} alt={coffee} className='product__logo' />
                        <p className='product__name'>AROMISTICO Coffee 1 kg</p>
                        <p className='product__region'>Brazil</p>
                        <p className='product__price'>6.99$</p>
                    </div>   
                    <div className='product__card'>
                        <img src={coffee} alt={coffee} className='product__logo' />
                        <p className='product__name'>AROMISTICO Coffee 1 kg</p>
                        <p className='product__region'>Brazil</p>
                        <p className='product__price'>6.99$</p>
                    </div>   
                    <div className='product__card'>
                        <img src={coffee} alt={coffee} className='product__logo' />
                        <p className='product__name'>AROMISTICO Coffee 1 kg</p>
                        <p className='product__region'>Brazil</p>
                        <p className='product__price'>6.99$</p>
                    </div>   
                    <div className='product__card'>
                        <img src={coffee} alt={coffee} className='product__logo' />
                        <p className='product__name'>AROMISTICO Coffee 1 kg</p>
                        <p className='product__region'>Brazil</p>
                        <p className='product__price'>6.99$</p>
                    </div>   
                    <div className='product__card'>
                        <img src={coffee} alt={coffee} className='product__logo' />
                        <p className='product__name'>AROMISTICO Coffee 1 kg</p>
                        <p className='product__region'>Brazil</p>
                        <p className='product__price'>6.99$</p>
                    </div>   
                </div>
            </div>
    )
}

export default CoffeeProducts;