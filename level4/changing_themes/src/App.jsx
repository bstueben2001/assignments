import { useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Button from './Components/Button'
// import Main from './Components/Main'
import { ThemeContextProvider } from './themeContext'

function App(props) {


  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Header />
        <Button />
      </ThemeContextProvider>
    </>
  )
}

export default App
