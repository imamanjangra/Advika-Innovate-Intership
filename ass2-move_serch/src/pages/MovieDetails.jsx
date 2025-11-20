import { useParams } from "react-router-dom";
import { useState } from "react";
import useDetails from "../Hook/Details_api";

export default function MovieDetails() {
  const { id } = useParams();
  const { apiData: movie } = useDetails(id);

  const [open, setOpen] = useState(false); 

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading...
      </div>
    );
  }

  const trailer = movie.videos?.results?.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 p-6 md:p-16 flex flex-col md:flex-row gap-8">
        
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/4 rounded-xl shadow-2xl"
        />

        
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{movie.title}</h1>
          <p className="text-gray-300 italic">{movie.tagline}</p>

          <p className="text-gray-300">
            {movie.release_date?.substring(0, 4)} •{" "}
            {movie.genres?.map((g) => g.name).join(", ")} • {movie.runtime} mins
          </p>

          <p className="text-yellow-400 text-lg font-semibold">
            ⭐ {movie.vote_average?.toFixed(1)}
          </p>

          <p className="text-gray-300">{movie.overview}</p>

         
          <button
            onClick={() => setOpen(true)}
            className="mt-4 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg 
                   text-white font-medium border border-gray-700
                   shadow-sm transition-all duration-300 flex items-center gap-2"
          >
            Watch Trailer
          </button>

          <p className="text-gray-400">
            Budget: ${movie.budget?.toLocaleString()}
          </p>
          <p className="text-gray-400">
            Revenue: ${movie.revenue?.toLocaleString()}
          </p>
          <p className="text-gray-400">
            Language: {movie.original_language.toUpperCase()}
          </p>
          <p className="text-gray-400">Status: {movie.status}</p>

       
            <a
              href={movie.homepage}
              target="_blank"
              className="block text-blue-400 hover:underline mt-2"
            >
              Official Website
            </a>
          
        </div>
      </div>

      
      {open && trailer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 animate-fadeIn">
          <div className="w-11/12 md:w-2/3 lg:w-1/2 bg-gray-900 rounded-xl p-4 relative shadow-xl">

           
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-white text-2xl hover:text-red-500"
            >
              ✕
            </button>

           
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
