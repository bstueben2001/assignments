import { useState } from 'react'
import Pokemon from "./Components/Pokemon"
import ColorChanger from './Components/ColorChanger'

function App() {

  return (
    <>
      <ColorChanger />
      <h2>Pokemon List</h2>
      <Pokemon />
    </>
  )
}
export default App
