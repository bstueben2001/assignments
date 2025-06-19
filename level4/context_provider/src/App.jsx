import { useState } from 'react'
import Header from "./Components/Header"
import Button from "./Components/Button"
import {ThemeContextProvider} from './themeContext'


function App(props) {


  return (
    <>
      <ThemeContextProvider>
        <Header/>
        <Button/>
      </ThemeContextProvider>
    </>
  )
}

export default App
