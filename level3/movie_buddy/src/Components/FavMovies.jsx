import { useState } from "react"

export default function FavoriteMovie(props){

    const { favMovies } = props

    const [movieStyles, setMovieStyles] = useState({
        backgroundColor: 'red',
        color: 'white',
        border: 'solid black 1px'
    })

    function changeTheme(){
        setMovieStyles(prevMovieStyles => {
            return{
                ...prevMovieStyles,
                backgroundColor: 'lightBlue',
                color: 'black'
            }
        })
    }

    const movieElements = favMovies.map((movie, i) => {
        return(
            <div style={movieStyles} key={i}>
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <p>Rating: {movie.rating}</p>
                <button onClick={changeTheme}>Change Theme</button>
            </div>
        )
    })

    return (
        <div>
            <h2>My Favorite Movies</h2>
            {movieElements}
        </div>
    )
}