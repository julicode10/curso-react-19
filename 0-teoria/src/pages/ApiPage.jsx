import { useState, useEffect } from "react";
import axios from "axios";
export const ApiPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => {
        setPokemons(response.data.results);
        console.log(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPokemons(data.results);
    //     console.log(data.results);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);
  return (
    <div className="h-screen bg-amber-400 text-black">
      <h1>ApiPage</h1>
      {loading ? (
        <div>
          <h2>Cargando...</h2>
        </div>
      ) : (
        <section className="flex flex-col">
          {pokemons.map((pokemon, index) => (
            <div key={index}>
              <h2>{pokemon.name}</h2>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
