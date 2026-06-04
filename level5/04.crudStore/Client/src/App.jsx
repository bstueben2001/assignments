import { useState } from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Inventory from './Components/Inventory'

function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <Navbar setPage={setPage} />
      {page === 'home' && <Home />}
      {page === 'inventory' && <Inventory />}
    </>
  )
}

export default App
