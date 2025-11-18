import { useState } from "react";
import useSearchResult from "../Hook/Search_result";
import MovieCard from "../components/MovieCard";

export function SearchBar() {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState(""); // submit ke liye
  const apiData = useSearchResult(query); // pass query to hook

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(value); // hook ko update karo
    setValue(""); // input clear
  };

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <form onSubmit={handleSubmit} className="flex w-3/4 md:w-1/2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
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

      {/* Display results */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {apiData?.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.release_date?.substring(0, 4)}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            rating={movie.vote_average?.toFixed(1)}
          />
        ))}
      </div>
    </div>
  );
}
