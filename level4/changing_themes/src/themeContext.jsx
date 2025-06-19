import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){

    const [theme, setTheme] = useState("dark")
  
    const toggleTheme = () => { //ternary attached to setTheme to toggle light or dark mode within the state
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")
    }
  
    return(
        <ThemeContextProvider value={{
          theme,
          toggleTheme
        }}>
          {props.children}
        </ThemeContextProvider>
    )
}

export {ThemeContext, ThemeContextProvider}