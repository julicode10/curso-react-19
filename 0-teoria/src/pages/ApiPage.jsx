import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const ApiPage = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["consulta api pokemon"],
    queryFn: async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      return response.data.results;
    },
    // staleTime: 1000 * 60 * 5, // 5 minutos
    refetchOnWindowFocus: false,
    // refetchInterval: 1000 * 60 * 5, // 5 minutos
  });

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No hay datos</div>;

  return (
    <main className="h-screen bg-amber-400 text-black">
      {/* <BtnVolver /> */}
      <h1>ApiPage</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
        onClick={refetch}
      >
        click a refetch
      </button>
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
