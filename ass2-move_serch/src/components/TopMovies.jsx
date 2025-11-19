import MovieCard from "./MovieCard";
import Move_Api from "../Hook/Move_Api";
import { useState } from "react";
import { MovieCardSkeleton } from "./MovieCardSkeleton";
import Genre_Api from "../Hook/getGenre";

export function TopMovies() {
  const{ apiData , loading} = Move_Api(); 
  const genreMap = Genre_Api();
  console.log(genreMap)
  console.log(apiData)


  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 text-white">🔥 Top Movies</h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {loading
          ? // Show 6 skeleton loaders while fetching
            Array.from({ length: 6 }).map((__, i) => <MovieCardSkeleton key={i} />)
          : // Map movies to MovieCard
            apiData?.results?.map((movie) => {
              // Map genre IDs to names, fallback to "Action / Thriller"
              const genres =
                movie.genre_ids
                  .map((id) => genreMap[id])
                  .filter(Boolean)
                  .join(" / "|| "Action/Thriller") ;

              return (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  year={movie.release_date?.substring(0, 4)}
                  poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  rating={movie.vote_average?.toFixed(1)}
                  genre={genres}
                />
              );
            })}
      </div>
    </div>
  );
}
