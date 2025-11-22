import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import useDetails from "../Hook/Details_api";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();   // ← Back button ke liye add kiya
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
      className="min-h-screen text-white relative md:bg-cover md:bg-center rounded-2xl"
      style={{
        backgroundImage:
          window.innerWidth >= 768
            ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
            : "none",
      }}
    >
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

      <div className="relative z-10 p-4 md:p-16 flex flex-col md:flex-row gap-6 md:gap-8">

       
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm font-medium"
        >
          ← Back
        </button>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/4 rounded-xl shadow-2xl"
        />

        <div className="flex-1 space-y-3 md:space-y-4">
          <h1 className="text-2xl md:text-5xl font-bold">{movie.title}</h1>
          <p className="text-gray-300 italic text-sm md:text-base">{movie.tagline}</p>

          <p className="text-gray-300 text-sm md:text-base">
            {movie.release_date?.substring(0, 4)} •{" "}
            {movie.genres?.map((g) => g.name).join(", ")} • {movie.runtime} mins
          </p>

          <p className="text-yellow-400 text-lg md:text-xl font-semibold">
            ⭐ {movie.vote_average?.toFixed(1)}
          </p>

          <p className="text-gray-300 text-sm md:text-base">{movie.overview}</p>

          {movie?.videos?.results.length !== 0 ? (
            <button
              onClick={() => setOpen(true)}
              className="mt-2 md:mt-4 px-4 md:px-6 py-2 md:py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium border border-gray-700 shadow-sm transition-all duration-300 flex items-center gap-2"
            >
              Watch Trailer
            </button>
          ) : (
            ""
          )}

          <div className="text-gray-400 text-sm md:text-base space-y-1">
            <p>Budget: ${movie.budget !== 0 ? movie.budget?.toLocaleString() : "N/A"}</p>
            <p>Revenue: ${movie.revenue !== 0 ? movie.revenue?.toLocaleString() : "N/A"}</p>
            <p>Language: {movie.original_language.toUpperCase()}</p>
            <p>Status: {movie.status}</p>
          </div>
        </div>
      </div>

      {open && trailer ? (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4 md:p-0">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-900 rounded-xl p-4 relative shadow-xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 md:top-3 md:right-4 text-white text-2xl hover:text-red-500"
            >
              ✕
            </button>

            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
