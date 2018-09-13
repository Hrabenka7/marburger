import React from 'react';
import style from './ItemsNav.css'

const itemsNav = (props) => (
    <ul className={style.ItemsNav}>
        <li className={style.SingleItem}>
        <a href="/" className={style.active}>Burger Builder</a></li>
        <li className={style.SingleItem}><a href="/">Checkout</a></li>
    </ul>
);


export default itemsNav;