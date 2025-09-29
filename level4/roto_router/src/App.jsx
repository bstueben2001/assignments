import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import ServiceCard from './Components/ServiceCard'
import ServicePage from './Components/ServicePage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<ServicePage />}></Route>
      </Routes>
    </>
  )
}

export default App
