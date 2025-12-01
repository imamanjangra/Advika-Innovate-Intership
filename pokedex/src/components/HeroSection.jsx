import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  const [pokemonList, setPokemonList] = useState([]);

  // Fetch 6 random Pokémon
  useEffect(() => {
    async function fetchRandomPokemon() {
      const randomIds = Array.from({ length: 7 }, () =>
        Math.floor(Math.random() * 905) + 1 // Pokémon IDs 1-905
      );

      const data = await Promise.all(
        randomIds.map(async (id) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const poke = await res.json();
          return {
            id,
            img: poke.sprites.other["official-artwork"].front_default,
          };
        })
      );

      setPokemonList(data);
    }

    fetchRandomPokemon();
  }, []);

  if (!pokemonList.length)
    return <p className="text-center py-10 text-xl">Loading...</p>;

  const imgs = pokemonList.map((p) => p.img);
  const mainImg = imgs[3]; // center image

  return (
    <section className="relative w-full py-20 flex flex-col items-center overflow-hidden">

      {/* Gradient / Blur circle */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 md:px-12 w-full">

        {/* Top row */}
        <div className="flex justify-around w-full max-w-5xl gap-6">
          <Circle img={imgs[0]} id={pokemonList[0].id} navigate={navigate} />
          <Circle img={imgs[1]} id={pokemonList[1].id} navigate={navigate} />
        </div>

        {/* Middle row */}
        <div className="flex justify-between items-center w-full max-w-5xl gap-6">
          <Circle img={imgs[2]} id={pokemonList[2].id} navigate={navigate} />
          <Circle img={mainImg} id={pokemonList[3].id} big navigate={navigate} />
          <Circle img={imgs[4]} id={pokemonList[4].id} navigate={navigate} />
        </div>

        {/* Bottom row */}
        <div className="flex justify-around w-full max-w-5xl gap-6">
          <Circle img={imgs[5]} id={pokemonList[5].id} navigate={navigate} />
          <Circle img={imgs[6]} id={pokemonList[6].id} navigate={navigate} />
        </div>
      </div>

      <h2 className="mt-8 text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
        Trending Pokemon
      </h2>
    </section>
  );
}

// Circle component
function Circle({ img, big, id, navigate }) {
  return (
    <div
      onClick={() => navigate(`/detailsPage/${id}`)}
      className={`cursor-pointer ${
        big
          ? "w-36 h-36 md:w-52 md:h-52 shadow-2xl"
          : "w-20 h-20 md:w-24 md:h-24 shadow-lg"
      } rounded-full bg-white dark:bg-gray-900 border border-gray-200 
      dark:border-gray-700 flex items-center justify-center 
      transition-transform duration-300 hover:scale-110`}
    >
      {img ? (
        <img
          src={img}
          alt={`Pokemon ${id}`}
          className={`${big ? "w-24 md:w-40" : "w-10 md:w-14"} object-contain`}
        />
      ) : (
        <span className="text-gray-400">No Image</span>
      )}
    </div>
  );
}
