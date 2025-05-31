import { useState } from 'react'

function App() {

  const stringValue = "to The Grid"
  const inlineStyling = {
    backgroundColor: "black",
    color: "#75D4FF"
  }

  return (
    <h1 style={inlineStyling}>Welcome, {stringValue}...</h1>


  )
}

export default App
