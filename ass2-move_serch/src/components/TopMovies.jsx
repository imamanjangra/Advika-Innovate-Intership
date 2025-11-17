import MovieCard from "./MovieCard";

export function TopMovies() {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 text-white">🔥 Top Movies</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}
