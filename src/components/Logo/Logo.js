import React from 'react';
import classes from './Logo.css';

import burgerLogo from '../../assets/img/burger-logo.png';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt=""/>
    </div>
);

export default Logo;