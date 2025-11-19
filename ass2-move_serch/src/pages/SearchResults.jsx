import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useSearchResult from "../Hook/Search_result";
import { SearchBar } from "../components/SearchBar";
import { MovieCardSkeleton } from "../components/MovieCardSkeleton";

export default function SearchResults() {
  const { query } = useParams();
  const {apiData , loading} = useSearchResult(query);
  console.log(apiData)

  return (
    <div className="px-6 py-8">
      <SearchBar/>
      <h1 className="text-3xl font-bold mb-6 text-white">
        Search Results for: <span className="text-blue-500">{query}</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {
        loading ? Array.from({length : 10}).map((_,i) => <MovieCardSkeleton key={i}/>)
        : apiData?.results?.map((movie) => (
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
