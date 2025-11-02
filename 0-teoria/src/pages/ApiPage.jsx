import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const ApiPage = () => {
  const {
    data: data1,
    isLoading: isLoading1,
    error: error1,
    refetch: refetch1,
  } = useQuery({
    queryKey: ["consulta api pokemon"],
    queryFn: async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      return response.data.results;
    },
    enabled: !!data1,
  });

  if (isLoading1) return <div>Cargando...</div>;
  if (error1) return <div>Error: {error1.message}</div>;
  if (!data1) return <div>No hay datos</div>;

  return (
    <main className="h-screen bg-amber-400 text-black">
      {/* <BtnVolver /> */}
      <h1>ApiPage</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
        onClick={refetch1}
      >
        click a refetch
      </button>
      <section className="flex flex-col">
        {data1.map((pokemon, index) => (
          <div key={index}>
            <h2>{pokemon.name}</h2>
          </div>
        ))}
      </section>
    </main>
  );
};
