import React from 'react';
import ItemsNav from '../ItemsNav/ItemsNav';
import Logo from '../../Logo/Logo'
import drawerStyling from './SideDrawer.css'

const sideDrawer = (props) => {
    return (
        <div className={drawerStyling.SideDrawer}>
            <Logo/>
            <nav>
            <ItemsNav/>
            </nav>
     
        </div>
    );
};

export default sideDrawer;