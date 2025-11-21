import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [value, setValue] = useState("");
  const [apiData, setApiData] = useState([]);
  const [showSuggest, setShowSuggest] = useState(false);
  const API_KEY = "ed7d88839c4f0e683b44fd50dd8de839";
  const navigate = useNavigate();

  // Fetch suggestions
  useEffect(() => {
    if (value.trim() === "") {
      setApiData([]);
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => setApiData(data.results || []))
      .catch((err) => console.error("API error:", err));
  }, [value]);

  // Submit search form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    navigate(`/search/${encodeURIComponent(value)}`);
    setShowSuggest(false);
    setValue("");
  };

  // Click suggestion
  const handleSelect = (movie) => {
    navigate(`/search/${encodeURIComponent(movie.title)}`);
    setShowSuggest(false);
    setValue("");
  };

  return (
    <div className="w-full flex flex-col items-center mt-6 relative">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex w-3/4 md:w-1/2">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setShowSuggest(true);
          }}
          type="text"
          placeholder="Search for movies..."
          className="w-full p-3 rounded-l-xl bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500"
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white rounded-r-xl hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggest && apiData.length > 0 && (
        <div className="absolute top-16 w-3/4 md:w-1/2 bg-gray-900 border border-gray-700 rounded-xl shadow-xl max-h-80 overflow-y-auto z-50">
          {apiData.slice(0, 7).map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleSelect(movie)}
              className="flex items-center gap-3 p-3 hover:bg-gray-800 cursor-pointer transition-colors"
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "https://via.placeholder.com/50x70?text=No+Image"
                }
                className="w-10 h-14 rounded object-cover"
              />
              <div>
                <p className="text-white font-medium">{movie.title}</p>
                <p className="text-gray-400 text-sm">
                  {movie.release_date?.slice(0, 4) || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
