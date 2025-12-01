import { useEffect, useState } from "react";

export default function usePokemonList(page, limit) {
  const [pokemonList, setPokemonList] = useState(null);

  useEffect(() => {
    const offset = (page - 1) * limit;

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then(res => res.json())
      .then(data => setPokemonList(data));
  }, [page]);

  return pokemonList;
}
