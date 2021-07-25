import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon'
import { useContext, useEffect, useState} from 'react';
import CartContext from '../../store/cart-context';


const HeaderCartButon = props =>{
    const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((cN,item)=>{
        return cN + item.amount;
    },0);
    const {items} = cartCtx;
    const btnClasses = `${classes.button} ${btnIsHighlighted?classes.bump:''}`;
    useEffect(()=>{
        if(items.length === 0)return;
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Atlas25
        </span>
        <span className={classes.badge}>
           {numberOfCartItems} 
        </span>
    </button>
};

export default HeaderCartButon;