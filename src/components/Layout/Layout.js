import React, {Component} from 'react';
import Wrap from '../../hoc/Wrap';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';

//CSS Import
import style from './Layout.css';

class Layout extends Component {

    state = {
      showSideDrawer: true

    };

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler  = () => {

        this.setState((prevState)=>{
           return {
               showSideDrawer: !prevState.showSideDrawer
           };
        });

    };

    render() {

        return (
            <Wrap>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <main className={style.Content}>
                    {this.props.children}
                </main>
            </Wrap>
        );
    }

}

export default Layout;

