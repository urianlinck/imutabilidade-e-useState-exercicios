import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

    const evoluirPokemon = () => {
        console.log("Cliquei no botão de evoluir")
        
        props.setPokemon({...props.pokemon, 
            name: "Pikachu", 
            image: "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png",
            color: "#cea956",
            evolved: true,
            weight: 6 })
    }
  return (
    <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon${props.id}`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.evolved}</p>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard