import { useNavigate } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  const navigate = useNavigate()

  const passvalue = () => {
    navigate(`/detailsPage/${pokemon.id}`)
  }
  return (

    <div
    className="p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div
      onClick={passvalue}
      className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
        <img src={pokemon.sprites.other["official-artwork"].front_default} className="w-24 h-24"/>
      </div>

      <h3 className="text-center font-semibold text-lg mt-3 dark:text-white capitalize">
        {pokemon.name}
      </h3>

      <p className="text-center text-sm text-gray-500 dark:text-gray-400">#{pokemon.id}</p>

      <div className="flex justify-center gap-2 mt-3">
        {pokemon.types.map((item, i) => (
          <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 dark:text-gray-200">
            {item.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
