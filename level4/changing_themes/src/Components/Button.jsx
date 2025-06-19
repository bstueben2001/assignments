import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

export default function Button(props){

    const {theme} = useContext(ThemeContext)

    return(
        <div>
            <button onClick={toggleTheme} className={`${theme}-theme`}>Rectify.changeTheme</button>
        </div>
    )

}




// function Button(props) {

//     const context = useContext(ThemeContext)

//     return (
//         <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Rectify.changeTheme</button>
//     );
// }

// export default Button;