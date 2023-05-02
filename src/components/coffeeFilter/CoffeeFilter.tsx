import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { filterChanged } from '../../store/slices/filterSlice';
import { ChangeEvent } from 'react';
import classNames from 'classnames';

import Spinner from '../spinner/Spinner';

import './coffeeFilter.scss';
import { searchStringChanged } from '../../store/slices/searchSlice';

const CoffeeFilter = () => {
    const dispatch = useAppDispatch();
    const {status, activeFilter, data} = useAppSelector(state => state.filter);


    const searchTypingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(searchStringChanged(event.target.value));
    }


    const spinner: JSX.Element | null = status ? <Spinner/> : null;
    const itemBtns: JSX.Element[] = data.map(({id, label}) => {
        return (
            <button 
                className={classNames('filter__btn', {
                    'active': label === activeFilter
                })} 
                key={id} 
                onClick={() => dispatch(filterChanged(label))}>
                {label}
            </button>
        )
    })


    return (
        <div className="filter">
            <div className="filter__wrapper">
                <div className="filter__input">
                    <p className="filter__title">Looking for</p>
                    <input className='filter__search' type="text" onInput={searchTypingHandler} placeholder="start typing here..."/>
                </div>
                <div className="filter__tabs">
                    <p className="filter__title">Or filter</p>
                    {status ? spinner : itemBtns}
                </div>
            </div>
        </div>
    )
}

export default CoffeeFilter;