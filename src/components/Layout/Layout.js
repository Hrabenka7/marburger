import React from "react";
import layoutStyling from './Layout.css'

const layout = (props) => (
    <React.Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={layoutStyling.Content}>
            {props.children} {/*  === BurgerBuilder.children === Burger, Controls */}
        </main>
    </React.Fragment>
)

export default layout 