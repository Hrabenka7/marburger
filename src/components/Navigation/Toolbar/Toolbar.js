/**
 * Child component of Layout. Receiving props { toggleClicked } from Layout
 */

import React from 'react';
import style from './Toolbar.css';
import Logo from '../../Logo/Logo'
import ItemsNav from '../ItemsNav/ItemsNav'
import MenuToggle from '../SideDrawer/MenuToggle/MenuToggle'

const toolbar = (props) => {
    return (
        <header className={style.Toolbar}>
            <MenuToggle clicked={props.toggleClicked}/>
            <Logo height="80%"/>
            
            <nav className={style.DesktopOnly}>
                <ItemsNav></ItemsNav>
            </nav>
            
        </header>
    );
};

export default toolbar;