import React from "react";
import layoutStyling from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    <React.Fragment>
        <Toolbar/>
        <SideDrawer/>
        <main className={layoutStyling.Content}>
            {props.children} {/*  === BurgerBuilder.children === Burger, Controls */}
        </main>
    </React.Fragment>
)

export default layout 

