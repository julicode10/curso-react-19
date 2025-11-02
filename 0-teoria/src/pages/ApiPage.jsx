import { useState, useEffect } from "react";
export const ApiPage = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        console.log(data.results);
      });
  }, []);
  return (
    <div className="h-screen bg-amber-400 text-black">
      <h1>ApiPage</h1>
      <section className="flex flex-col">
        {pokemons.map((pokemon, index) => (
          <div key={index}>
            <h2>{pokemon.name}</h2>
          </div>
        ))}
      </section>
    </div>
  );
};
