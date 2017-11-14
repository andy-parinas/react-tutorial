import React from 'react';

import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../Backdrop/Backdrop';
import Wrap from '../../../../hoc/Wrap';

import classes from './SideDrawer.css';

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    console.log(attachedClasses);

    return(
        <Wrap>
            <Backdrop
                show={props.open}
                clicked={props.closed}/>

            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>

                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Wrap>
    )
};

export default SideDrawer;
