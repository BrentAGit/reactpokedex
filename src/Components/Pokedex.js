import React from "react";

import PokemonUICard from "./PokemonUICard";
import { SearchInputContext } from "../Context/SearchInputContext";

export default function Pokedex() {
    const [pokemonData, setPokemonData] = React.useState([])

    const context = React.useContext(SearchInputContext)

    React.useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => response.json())
        .then(data => setPokemonData(data.results))

        .catch(error => console.log(error))
    }, [])

    const pokemonDataElement = pokemonData.map((pokemon, index) => {
        return (
            pokemon.name.includes(context.input) && <PokemonUICard key={index} name={pokemon.name} url={pokemon.url}/>
        ) 
    })

    console.log(pokemonDataElement)

    return (
        <main>
            {pokemonDataElement}
        </main>
    )
}