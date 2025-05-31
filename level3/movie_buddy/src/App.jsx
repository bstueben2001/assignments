import { useState } from 'react'
import RandomMovie from './Components/RandomMovie'
import Navbar from './Components/Navbar'
import FavoriteMovie from './Components/FavMovies'
import Form from './Components/Form'

function App() {

  const [theme, setTheme] = useState('light')

  function toggleTheme(){
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const [favMovies, setFavMovies] = useState([])

  function addMovie(newMovie){
    setFavMovies(prevFavMovies => {
      return [...prevFavMovies, newMovie]
    })
  }

  return (
    <div className={`${theme} main`}>
      <Navbar toggleTheme={toggleTheme}/>
      <RandomMovie addMovie={addMovie} />
      <Form addMovie = {addMovie}/>
      <FavoriteMovie favMovies={favMovies}/>
    </div>
  )
}

export default App
