import React from 'react';
import { useContext } from 'react';
import {ThemeContext} from '../themeContext';

function Button(props) {

    const context = useContext(ThemeContext)

    return (
        <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Change Theme</button>
    );
}

export default Button;