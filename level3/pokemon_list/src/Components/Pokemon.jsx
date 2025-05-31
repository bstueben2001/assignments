import { useState, useEffect } from 'react'
import axios from "axios"

export default function Pokemon(){

    const [pokemonList, setPokemonList] = useState([])
    
    useEffect(() => {
        axios.get("https://api.vschool.io/pokemon")
            .then(res => {setPokemonList(res.data.objects[0].pokemon)})
            .catch(err => console.log(err))
    }, [])

    const pokemonItem = pokemonList.map(pokemon => {
        return(
            <div key={pokemon.id}>
                <h3>Name: {pokemon.name}</h3>
            </div>
        )
    })

    return(
        <div>
            <>{pokemonItem}</>
        </div>
    )
}

















  
