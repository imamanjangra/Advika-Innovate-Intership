import Hindi_Api from "../Hook/Hindi_Api";
import MovieCard from "./MovieCard";


export function HindiMove() {
  const Hindi_Api_data = Hindi_Api()
//   console.log(Hindi_Api_data);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 text-white">🔥 Hindi Moves </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {/* Check if weekly_api.results exists before mapping */}
        {Hindi_Api_data?.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.release_date?.substring(0, 4)}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            rating={(movie.vote_average)?.toFixed(1)}
          />
        ))}
      </div>
    </div>
  );
}
