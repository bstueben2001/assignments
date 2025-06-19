import { useState } from 'react'
import Callout from './Components/Callout'


function App() {


  return (
    <>
      <h1>Welcome!</h1>
      <Callout>
        <h2>Don't miss out!</h2>
        <p>words words words</p>  
      </Callout>
      <Callout>
        <img src='https://www.fisheries.noaa.gov/s3//styles/original/s3/2022-09/640x427-Shrimp-Pink-NOAAFisheries.png?itok=uTK6p5TL'></img>
        <p>Wowza!!</p>
      </Callout>
      <Callout>
        <h2>Give us your money. I mean email.</h2>
        <input placeholder='Enter email'></input>
        <button type='submit'>Sell. I mean subscribe</button>  
      </Callout> 
    </>
  )
}

export default App
