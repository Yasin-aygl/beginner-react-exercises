import "../App.css";

import { pokemons } from "../Mock/MockedPokeData";

import { useState } from "react";

const PokemonCard = () => {
  const [input, setInput] = useState("");

  return (
    <div className="pokemon-card">
      <h1>Pokemon filter search</h1>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)} // Kullanıcının girdiğini izleyen bir input alanı
        placeholder="Search" // Arama kutusunun içine varsayılan metin
      />
      <div className="card-item">
        {pokemons
          .filter((pokemon) =>
            pokemon.name.includes(input.toLocaleLowerCase().trim())
          ) // Kullanıcının girdiği metni içeren Pokemonları filtrele
          .map((pokemon) => {
            return (
              <div key={pokemon.name} className="pokemons">
                <h3 style={{fontSize: "10px"}}>{pokemon.name}</h3>
                <img src={pokemon.sprite} alt={pokemon.name} style={{width: "30px"}} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PokemonCard;
