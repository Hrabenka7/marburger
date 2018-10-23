/** Child component of App.js, wrapping the BurgerBuilder. 
 * Sending props toggleClicked to Toolbar
*/

import React, {Component} from "react";
import layoutStyling from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    
    // -- initially the sideDrawer is hidden -- //
    state = {
        showSideDrawer: false
    }

    // -- close side drawer when its opened -- //
    closeSideDrawer = () => {
        this.setState({showSideDrawer: false})
    }

    // ------ hide or show the SideDrawer depending on its previous State ----- //
    toggleSideDrawer = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer}; 
        });
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar toggleClicked={this.toggleSideDrawer}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.closeSideDrawer}/>
                <main className={layoutStyling.Content}>
                    {this.props.children} {/*  === BurgerBuilder.children === Burger, Controls */}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout 

