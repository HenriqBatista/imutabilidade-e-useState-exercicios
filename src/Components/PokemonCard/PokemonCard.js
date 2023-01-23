import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton, PokemonImage} from './styles'




const PokemonCard = (props) => {

    const evoluirPokemon = () => {
        props.setPokemon(props.evolve)
        console.log("Cliquei no botão de evoluir")
    }
    
  return (
    <Card color={props.pokemon.color}>
        <PokemonImage src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard