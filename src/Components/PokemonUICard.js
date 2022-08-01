import React from "react";


export default function PokemonUICard(props) {
    const [pokemon, setPokemon] = React.useState({})

    React.useEffect(() => {
        fetch(props.url)
        .then(response => response.json())
        .then(data => setPokemon(data))

        .catch(error => console.log(error))
    }, [props.url])
    
    return (
        <section>
            <a href={`https://www.pokemon.com/nl/pokedex/${pokemon.name}`} target="_blank">
                <div className="grid">
                    <h3 className="grid_item">Pokedex ID:</h3>
                    <h3 className="grid_item">name:</h3> 
                    <h3 className="grid_item">type(s):</h3> 
                    {pokemon.stats?.map(stat => <h3 className="grid_item">{stat.stat.name}:</h3>)}

                    <p className="grid_item">#{pokemon.id}</p>
                    <p className="grid_item">{pokemon.name}</p>
                    <p className="grid_item">{pokemon.types?.map(type => <>{type.type.name} </> )}</p>
                    {pokemon.stats?.map(stat => <p className="grid_item">{stat.base_stat} </p>)}
                </div>
            </a>
        </section>
    )
}