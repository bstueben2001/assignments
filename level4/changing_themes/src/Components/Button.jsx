import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../themeProvider';

export default function Button({ background, toggleBackground }){

    const context = useContext(ThemeContext)

    return(
        <div>
            <button onClick={ () => {
                context.toggleTheme();
                toggleBackground();
            }} 
                className={`${context.theme}-theme`}
                >
                Rectify.changeTheme
            </button>
        </div>
    )

}
