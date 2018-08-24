import React from "react";
import layoutStyling from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <React.Fragment>
        <Toolbar/>>
        <main className={layoutStyling.Content}>
            {props.children} {/*  === BurgerBuilder.children === Burger, Controls */}
        </main>
    </React.Fragment>
)

export default layout 