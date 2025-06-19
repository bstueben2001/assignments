import { useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Button from './Components/Button'
// import Main from './Components/Main'
import { ThemeContextProvider } from './themeProvider'

function App() {

  const [background, setBackground] = useState("tron")
  
  const toggleBackground = () => { //ternary attached to setTheme to toggle tron or rinzler background within the state
        setBackground(prevBackground => {
            const newBackground = prevBackground === "rinzler" ? "tron" : "rinzler";
            document.body.className = ""; 
            document.body.classList.add(`${newBackground}-theme`);
            console.log(newBackground === "tron" ? "I fight for the Users!" : "User.");
            return newBackground;
        })
  }

  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Header />
        <Button background={background} toggleBackground={toggleBackground}/>
      </ThemeContextProvider>
    </>
  )
}

export default App
