import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pichu, setPichu] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png'
  })

  const pikachu = {
    name: "Pikachu",
    type: "Electric",
    evolved: true,
    weight: 6,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/b/b4/20220911034246%210025Pikachu-Cosplay.png'
  }

  const [squirtle, setSquirtle] = useState({
    name: "Squirtle",
    type: "Water",
    evoled: false,
    weight: 9,
    color: 'blue',
    image: 'https://archives.bulbagarden.net/media/upload/archive/5/54/20110414005311%210007Squirtle.png'
  })

  const wartortle = {
    name: "Wartortle",
    type: "Water",
    evoled: true,
    weight: 22,
    color: 'blue',
    image:'https://archives.bulbagarden.net/media/upload/archive/0/0f/20130810083345%210008Wartortle.png'
  }

  const [gastly, setGastly] = useState({
    name: "Gastly",
    type: "Ghost/Poison",
    evoled: false,
    weight: 0.1,
    color: 'purple',
    image: 'https://archives.bulbagarden.net/media/upload/archive/c/c2/20130429090410%210092Gastly.png'
  })

  const haunter = {
    name: "Haunter",
    type: "Ghost/Poison",
    evoled: true,
    weight: 0.1,
    color: 'purple',
    image: 'https://archives.bulbagarden.net/media/upload/archive/d/d1/20130501065900%210093Haunter.png'
  }

  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
  
  
  

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard pokemon={pichu} setPokemon = {setPichu} evolucao = {pikachu} />
      <PokemonCard pokemon={squirtle} setPokemon={setSquirtle} evolucao={wartortle}/>
      <PokemonCard pokemon={gastly} setPokemon={setGastly} evolucao={haunter}/>
    </FlexContainer>
  </>
    
  );
}

export default App;
