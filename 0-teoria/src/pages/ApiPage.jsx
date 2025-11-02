import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BtnVolver } from "../components/ui/buttons/BtnVolver";

export const ApiPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data, isLoading, error } = useQuery({
    queryKey: ["consulta api pokemon"],
    queryFn: async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
        );
        const data = await response.json();
        return data.results;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No hay datos</div>;

  return (
    <main className="h-screen bg-amber-400 text-black">
      {/* <BtnVolver /> */}
      <h1>ApiPage</h1>
      <section className="flex flex-col">
        {data.map((pokemon, index) => (
          <div key={index}>
            <h2>{pokemon.name}</h2>
          </div>
        ))}
      </section>
    </main>
  );
};
