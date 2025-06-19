import React from 'react';
import {ThemeContext} from '../themeContext';
import { useContext } from 'react';

function Header(props) {

    const {theme} = useContext(ThemeContext) //destructured
    // console.log(context)

    return (
        <div className={`${theme}-theme`}>
            <h2>Theme Context</h2>
            <h3>You are currently using {theme} mode</h3>
        </div>
    );
}

export default Header;