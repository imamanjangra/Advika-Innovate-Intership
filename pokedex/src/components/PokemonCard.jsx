import { useNavigate } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  const navigate = useNavigate();

  const passvalue = () => navigate(`/detailsPage/${pokemon.id}`);

  return (
    <div
      onClick={passvalue}
      className="w-full sm:w-44 md:w-48 p-3 sm:p-4 rounded-xl shadow-md hover:shadow-xl 
      transition cursor-pointer bg-white dark:bg-gray-800 
      border border-gray-200 dark:border-gray-700"
    >
      <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-xl 
        flex items-center justify-center">
        
        <img
          src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
          className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
        />
      </div>

      <h3 className="text-center font-semibold text-base sm:text-lg mt-2 dark:text-white capitalize">
        {pokemon.name}
      </h3>

      <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        #{pokemon.id}
      </p>

      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        {pokemon.types?.map((item, i) => (
          <span
            key={i}
            className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium 
            bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
          >
            {item.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
