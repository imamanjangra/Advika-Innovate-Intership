import Genre_Api from "../Hook/getGenre";
import Hindi_Api from "../Hook/Hindi_Api";
import MovieCard from "./MovieCard";
import { MovieCardSkeleton } from "./MovieCardSkeleton";


export function HindiMove() {
  const {apiData , loading} = Hindi_Api()
  const genreMap = Genre_Api();

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 text-white">🔥 Hindi Moves </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        
 {loading
          ? Array.from({ length: 6 }).map((__, i) => <MovieCardSkeleton key={i} />)
          : apiData?.results?.map((movie) => {

              const genreNames = movie.genre_ids
                ?.map(id => genreMap[id]).filter(Boolean).join(", ")
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
