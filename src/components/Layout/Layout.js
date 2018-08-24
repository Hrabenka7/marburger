import React, {Component} from "react";
import layoutStyling from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    closeSideDrawer = () => {
        this.setState({showSideDrawer: false})
    }

    toggleSideDrawer = () => {
        this.setState( (prevState) => {
            return { showSideDrawer: !this.state.showSideDrawer}; 
        } );
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

