import  MovieCard  from "../components/MovieCard";

export default function SearchResults() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <MovieCard />
        
      </div>
    </div>
  );
}
