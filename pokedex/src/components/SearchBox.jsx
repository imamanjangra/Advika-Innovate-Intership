import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [ivalue, setivalue] = useState("");
  const [allPokemon, setAllPokemon] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
      .then((res) => res.json())
      .then((data) => setAllPokemon(data.results))
      .catch(() => setAllPokemon([]));
  }, []);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setivalue(value);

    if (value.length > 0) {
      const matches = allPokemon
        .filter((p) => p.name.toLowerCase().includes(value))
        .slice(0, 10);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ivalue) return;
    navigate(`/Serch/${ivalue}`);
    setSuggestions([]);
    setivalue("");
  };

  const handleSelect = (name) => {
    navigate(`/Serch/${name.toLowerCase()}`);
    setSuggestions([]);
    setivalue("");
  };

  return (
    <form className="w-full relative px-4" onSubmit={handleSubmit}>
      <div className="max-w-lg mx-auto mt-6 relative">

        {/* --- Fixed Row Layout --- */}
        <div className="flex items-center gap-2 flex-nowrap p-5">

          <input
            value={ivalue}
            onChange={handleChange}
            type="text"
            placeholder="Search Pokémon..."
            className="flex-1 p-3 rounded-full border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
            focus:ring-2 focus:ring-blue-400 outline-none transition pl-5 min-w-0"
          />

          <button
            type="submit"
            className="px-4 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 
            transition font-semibold whitespace-nowrap"
          >
            Search
          </button>
        </div>

        {suggestions.length > 0 && (
          <div className="absolute w-full left-0 top-full mt-2 z-50 
          bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600
          rounded-lg shadow-lg max-h-60 overflow-y-auto">
            
            {suggestions.map((item, i) => (
              <p
                key={i}
                onClick={() => handleSelect(item.name)}
                className="p-2 cursor-pointer hover:bg-gray-200 
                dark:hover:bg-gray-700 dark:text-gray-200 capitalize"
              >
                {item.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
