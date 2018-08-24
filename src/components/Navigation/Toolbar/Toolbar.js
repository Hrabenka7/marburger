import React from 'react';
import toolbarStyling from './Toolbar.css'

const toolbar = (props) => {
    return (
        <header className={toolbarStyling.Toolbar}>
            <div>Menu</div>
            <div>Logo</div>
            <nav>
                <ul>

                </ul>
            </nav>
            
        </header>
    );
};

export default toolbar;