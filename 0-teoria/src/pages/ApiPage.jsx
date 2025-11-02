import { useState, useEffect } from "react";
export const ApiPage = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="h-screen bg-amber-400 text-black">
      <h1>ApiPage</h1>
      <div className="grid grid-cols-4 gap-4">
        {pokemons?.abilities?.length > 0 && (
          <div>
            <h2>{pokemons.abilities[0].ability.name}</h2>
          </div>
        )}
        {pokemons?.stats?.length > 0 && (
          <div>
            <h2>{pokemons.stats[3].base_stat}</h2>
          </div>
        )}

        {pokemons.weight}
      </div>
    </div>
  );
};
