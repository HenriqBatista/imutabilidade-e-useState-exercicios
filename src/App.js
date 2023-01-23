import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png",
    id: 0,
  });

  const evolved = {
    ...pokemon,
    name : "Pikachu",
    evolved: true,
    weight: 6,
    color: "gold",
    image: "https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png"
  }

  const [pokemon1, setPokemon1] = useState({
    name: "Abra",
    type: "Psychic",
    evolved: false,
    weight: 1.9,
    color: "pink",
    image:
      "https://archives.bulbagarden.net/media/upload/b/bd/0063Abra.png",
    id: 1,
  });

  const evolved1 = {
    ...pokemon1,
    name: "Kadabra",
    evolved: true,
    weight: 5.6,
    color: "purple",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png"
  }

  const [pokemon2, setPokemon2] = useState({
    name: "Vulpix",
    type: "Fire",
    evolved: false,
    weight: 1.7,
    color: "red",
    image:
      "https://archives.bulbagarden.net/media/upload/0/06/0037Vulpix.png",
    id: 2,
  });

  const evolved2 = {
    ...pokemon2,
    name: "Ninetales",
    evolved: true,
    weight: 9.9,
    color: "orange",
    image: "https://archives.bulbagarden.net/media/upload/3/3e/0038Ninetales.png"
  }

  const [pokemon3, setPokemon3] = useState({
    name: "eevee",
    type: "normal",
    evolved: false,
    weight: 1.4,
    color: "brown",
    image:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    id: 3,
  });

  const evolved3 = {
    ...pokemon3,
    name: "Umbreon",
    type: "dark",
    evolved: true,
    weight: 2.5,
    color: "gray",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png"
  }



  // Para fazer seus próximos pokemons, crie novos estados!

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard pokemon={pokemon} setPokemon={setPokemon} evolve = {evolved} />
        <PokemonCard pokemon={pokemon1} setPokemon={setPokemon1} evolve = {evolved1}/>
        <PokemonCard pokemon={pokemon2} setPokemon={setPokemon2} evolve = {evolved2} />
        <PokemonCard pokemon={pokemon3} setPokemon={setPokemon3} evolve = {evolved3} />
        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </>
  );
}

export default App;
