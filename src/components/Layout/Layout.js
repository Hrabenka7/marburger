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

// <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>