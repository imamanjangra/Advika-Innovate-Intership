import { useState } from "react";
import List_poke from "../Hooks/List_poke";

export default function PokemonCard({ name = "Bulbasaur", number = "#001", types = ["Grass", "Poison"] }) {

  const api_data_list = List_poke();
  console.log(api_data_list)
 
  return (
    <div className="p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`}
          alt={name}
          className="w-24 h-24"
        />
      </div>

      <h3 className="text-center font-semibold text-lg mt-3 dark:text-white capitalize">{name}</h3>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">{number}</p>

      <div className="flex justify-center gap-2 mt-3">
        {types.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
