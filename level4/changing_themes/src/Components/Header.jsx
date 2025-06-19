import React from 'react';
import { ThemeContext } from '../themeProvider';
import { useContext } from 'react';

export default function Header(props){
    
    const {theme} = useContext(ThemeContext)
    // console.log(theme)

    return(
        <div className={`${theme}-theme`}>
            <h1>Welcome, User.</h1>
            <h2>Currently using {theme} theme.</h2>
        </div>
    )


}
