const express = require('express')
const movieRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const movies = [
  {title: "Project Hail Mary", year: 2026, _id: uuidv4()},
  {title: "The Dark Knight", year: 2008, _id: uuidv4()},
  {title: "Inception", year: 2010, _id: uuidv4()},
  {title: "Interstellar", year: 2014, _id: uuidv4()},
  {title: "TRON: Legacy", year: 2010, _id: uuidv4()}
];


movieRouter.get("/", (req, res) => {
    res.send(movies)
})

movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)    
    res.send(`Successfully added ${newMovie.title} to the database!! Here's it's ID: ${newMovie._id}`)
})


module.exports = movieRouter