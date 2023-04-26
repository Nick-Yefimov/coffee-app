import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import {  fetchFilter, filterChanged } from '../../features/filterSlice';
import { useEffect } from 'react';
import classNames from 'classnames';

import Spinner from '../spinner/Spinner';

import './coffeeFilter.scss';

const CoffeeFilter = () => {
    const dispatch = useAppDispatch();
    const {status, activeFilter, data} = useAppSelector(state => state.filter)

    useEffect(() => {
        dispatch(fetchFilter());
    }, [])



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
                    <input className='filter__search' type="text" placeholder="start typing here..."/>
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