import React from "react"
import PokemonCard from "./PokemonCard"


function MainContent({ pokeunoname, pokeunosprite, pokedosname, pokedossprite }) {



    return (
        <div className='Square'>
            <PokemonCard name={pokeunoname} sprite={pokeunosprite} />
            <p>vs</p>
            <PokemonCard name={pokedosname} sprite={pokedossprite} />
        </div >
    )
}
export default MainContent