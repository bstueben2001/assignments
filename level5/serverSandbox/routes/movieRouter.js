const express = require('express')
const movieRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const movies = [
  {title: "Project Hail Mary", year: 2026, favorite: "yes", _id: uuidv4()},
  {title: "The Dark Knight", year: 2008, favorite: "no", _id: uuidv4()},
  {title: "Inception", year: 2010, favorite: "no", _id: uuidv4()},
  {title: "Interstellar", year: 2014, favorite: "yes", _id: uuidv4()},
  {title: "TRON: Legacy", year: 2010, favorite: "yes", _id: uuidv4()}
];

// return all
movieRouter.get("/", (req, res) => {
    res.send(movies)
})

//return one
movieRouter.get("/:movieId",(req, res) =>{
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

//return certain favorites
movieRouter.get("/search/favorite", (req, res) => {
    const favorites = req.query.favorite
    const filteredMovies = movies.filter(movie => movie.favorite === favorites )
    res.send(filteredMovies)
})


movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)    
    res.send(`Successfully added ${newMovie.title} to the database!! Here's it's ID: ${newMovie._id}`)
})

movieRouter.put('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const updatedObject = req.body
    const movieIndex = movies.findIndex(movie => movie._id === movieId)

    if (movieIndex !== -1) {
        const updatedMovie = Object.assign(movies[movieIndex], updatedObject)
        res.send(updatedMovie)
    } else {
        res.status(404).send('Movie not found')
    }
})



movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)


})








module.exports = movieRouter