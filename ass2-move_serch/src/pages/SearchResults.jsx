import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useSearchResult from "../Hook/Search_result";
import { SearchBar } from "../components/SearchBar";
import { MovieCardSkeleton } from "../components/MovieCardSkeleton";
import Genre_Api from "../Hook/getGenre";

export default function SearchResults() {
  const { query } = useParams();
  const { apiData, loading } = useSearchResult(query);
  const genreMap = Genre_Api();

  return (
    <div className="px-4 md:px-6 py-6 md:py-8">
      <SearchBar />
      <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-6 md:mt-10 text-white">
        Search Results for: <span className="text-blue-500">{query}</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <MovieCardSkeleton key={i} />)
          : apiData?.results?.length === 0
          ? (
            <div className="col-span-full flex flex-col items-center py-10 text-gray-300">
              <div className="text-5xl mb-3">🔍</div>
              <h2 className="text-xl font-semibold">No results found</h2>
              <p className="text-sm mt-2 opacity-70">
                We couldn't find anything for{" "}
                <span className="text-blue-400 font-bold">{query}</span>.
              </p>
            </div>
          )
          : apiData.results.map((movie) => {
              const genreNames = movie.genre_ids
                ?.map((id) => genreMap[id])
                .filter(Boolean)
                .join(", ");

              return (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  year={movie.release_date?.substring(0, 4)}
                  poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  rating={movie.vote_average?.toFixed(1)}
                  genre={genreNames}
                />
              );
            })}
      </div>
    </div>
  );
}
