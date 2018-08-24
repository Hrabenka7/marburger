import React from 'react';
import navStyling from './ItemsNav.css'

const itemsNav = (props) => (
    <ul className={navStyling.ItemsNav}>
        <li className={navStyling.SingleItem}>
        <a href="/" className={navStyling.active}>Burger Builder</a></li>
        <li className={navStyling.SingleItem}><a href="/">Checkout</a></li>
    </ul>
);


export default itemsNav;