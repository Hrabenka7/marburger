import React from 'react';
import toolbarStyling from './Toolbar.css';
import Logo from '../../Logo/Logo'
import ItemsNav from '../../Navigation/ItemsNav/ItemsNav'
import MenuToggle from '../SideDrawer/MenuToggle/MenuToggle'

const toolbar = (props) => {
    return (
        <header className={toolbarStyling.Toolbar}>
            <MenuToggle clicked={props.toggleClicked}/>
            <Logo height="80%"/>
            <nav className={toolbarStyling.DesktopOnly}>
                <ItemsNav></ItemsNav>
            </nav>
            
        </header>
    );
};

export default toolbar;