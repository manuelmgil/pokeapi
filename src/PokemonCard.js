import React from 'react'

function PokemonCard({ name, sprite }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={sprite} alt='' />
        </div>
    )
}
export default PokemonCard