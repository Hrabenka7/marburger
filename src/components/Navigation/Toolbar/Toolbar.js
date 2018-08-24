import React from 'react';
import toolbarStyling from './Toolbar.css';
import Logo from '../../Logo/Logo'

const toolbar = (props) => {
    return (
        <header className={toolbarStyling.Toolbar}>
            <div>Menu</div>
            <Logo/>
            <nav>
                <ul>

                </ul>
            </nav>
            
        </header>
    );
};

export default toolbar;