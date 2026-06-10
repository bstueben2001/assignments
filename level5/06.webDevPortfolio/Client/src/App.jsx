import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import InfoMode from './Components/InfoMode'
import FunMode from './Components/FunMode'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/info"
          element={
            <>
              <Navbar />
              <InfoMode />
            </>
          }
        />
        <Route
          path="/fun"
          element={
            <>
              <Navbar />
              <FunMode />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
