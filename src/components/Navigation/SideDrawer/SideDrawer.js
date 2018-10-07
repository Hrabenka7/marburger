/** 
 * Side Menu opened by clicking on burger menu, small screen size 
 * Receives props from Layout {open: false/true, clicked}
 * */

import React from 'react';
import ItemsNav from '../ItemsNav/ItemsNav';
import Logo from '../../Logo/Logo'
import BackDrop from '../../UI/Backdrop/Backdrop';
import style from './SideDrawer.css'

// ------  apply translate styling (animation) ----- //
const sideDrawer = (props) => {
    let attachedClasses = [style.SideDrawer, style.Close];
    if (props.open) {
        attachedClasses = [style.SideDrawer, style.Open]
    }

    return (
        <React.Fragment>
            <BackDrop show={props.open} clicked={props.closed}/>
                <div className={attachedClasses.join(' ')}>
                    <Logo height="10%" marginBottom="32px"/>
                    <nav>
                        <ItemsNav/>
                    </nav>
                </div>
        </React.Fragment>
    );
};

export default sideDrawer;