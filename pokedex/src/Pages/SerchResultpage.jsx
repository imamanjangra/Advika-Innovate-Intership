import { useParams } from "react-router-dom";
import Serchapi from "../Hooks/Serchapi";
import PokemonCard from "../Components/PokemonCard";
import { useEffect, useState } from "react";

export default function SerchResultpage() {
  const { name } = useParams();
  const results = Serchapi(name);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    async function fetchDetails() {
      const list = await Promise.all(
        results.map(async (item) => {
          const res = await fetch(item.url);
          return res.json();
        })
      );
      setPokemonDetails(list);
    }

    if (results.length) fetchDetails();
  }, [results]);

  if (!results.length)
    return <h2 className="text-center text-xl mt-10">Searching...</h2>;

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {pokemonDetails.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
