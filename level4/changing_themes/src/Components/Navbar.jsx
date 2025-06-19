import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

export default function Navbar(props){

    const {theme} = useContext(ThemeContext) //destructured

    return(
        <nav className={`${theme}-theme`}>
            <ul className="navbar">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
