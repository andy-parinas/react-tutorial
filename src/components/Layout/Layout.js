import React from 'react';
import Wrap from '../../hoc/Wrap';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';

//CSS Import
import style from './Layout.css';

const Layout = (props) => (
    <Wrap>
        <Toolbar/>
        <main className={style.Content}>
            { props.children}
        </main>
    </Wrap>
);

export default Layout;

