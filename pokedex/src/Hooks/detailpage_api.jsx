import { useEffect, useState } from "react";

export default function detailpage_api(id) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const resPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const poke = await resPoke.json();

        const resSpecies = await fetch(poke.species.url);
        const species = await resSpecies.json();

        const resEvo = await fetch(species.evolution_chain.url);
        const evolutionChain = await resEvo.json();

        setData({ poke, species, evolutionChain });
      } catch (err) {
        console.error("fetching error :", err);
      }
    }

    fetchPokemon();
  }, [id]);

  return data;
}
