import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

export default function Header(props){
    
    const {theme} = useContext(ThemeContext)
    console.log({theme})

    return(
        <div className={`${theme}-theme`}>
            <h1>Welcome, User.</h1>
            <h2>Currently using {theme} theme.</h2>
        </div>
    )


}




// function Header(props) {

//     const {theme} = useContext(ThemeContext) //destructured
//     // console.log(context)
//     console.log({theme})

//     return (
//         <div className={`${theme}-theme`}>
//             <h2>Welcome!</h2>
//             <h3>{theme} mode</h3>
//         </div>
//     );
// }

// export default Header;