import React from 'react';
import toolbarStyling from './Toolbar.css';
import Logo from '../../Logo/Logo'
import ItemsNav from '../../Navigation/ItemsNav/ItemsNav'

const toolbar = (props) => {
    return (
        <header className={toolbarStyling.Toolbar}>
            <div>Menu</div>
            <Logo/>
            <nav>
                <ItemsNav></ItemsNav>
            </nav>
            
        </header>
    );
};

export default toolbar;