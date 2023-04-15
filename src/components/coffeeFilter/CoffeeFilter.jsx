
import './coffeeFilter.scss';

const CoffeeFilter = () => {
    return (
        <div className="filter">
            <div className="filter__wrapper">
                <div className="filter__input">
                    <p className="filter__title">Looking for</p>
                    <input className='filter__search' type="text" placeholder="start typing here..."/>
                </div>
                <div className="filter__tabs">
                    <p className="filter__title">Or filter</p>
                    <button className="filter__btn">Brazil</button>
                    <button className="filter__btn">Kenya</button>
                    <button className="filter__btn">Columbia</button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeFilter;