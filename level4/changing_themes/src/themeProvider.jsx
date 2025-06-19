import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){

    const [theme, setTheme] = useState("light") // state for theme

    const toggleTheme = () => { //ternary attached to setTheme to toggle light or dark mode within the state
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")
    }
  
    return(
        <ThemeContext.Provider value={{
          theme,
          toggleTheme
        }}>
          {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}