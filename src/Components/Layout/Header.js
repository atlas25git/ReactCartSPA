import React from 'react';
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HCB from './HeaderCartButton'

const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>Arlas25</h1>
            <HCB onClick={props.onShowCart}></HCB>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt='atlas'/>
        </div>
    </>
}

export default Header;