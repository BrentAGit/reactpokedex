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
            <a href={`https://www.pokemon.com/nl/pokedex/${pokemon.name}`} target="_blank" rel="noreferrer">
                <div className="grid">
                    <h3 className="grid-item">Pokedex ID:</h3>
                    <h3 className="grid-item">name:</h3> 
                    <h3 className="grid-item">type(s):</h3> 
                    {pokemon.stats?.map(stat => <h3 className="grid-item">{stat.stat.name}:</h3>)}

                    <p className="grid-item">#{pokemon.id}</p>
                    <p className="grid-item">{pokemon.name}</p>
                    <p className="grid-item">{pokemon.types?.map(type => <>{type.type.name} </> )}</p>
                    {pokemon.stats?.map(stat => <p className="grid-item">{stat.base_stat} </p>)}
                </div>
            </a>
        </section>
    )
}