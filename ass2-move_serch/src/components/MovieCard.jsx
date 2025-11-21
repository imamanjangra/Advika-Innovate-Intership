import { useNavigate } from "react-router-dom";

export default function MovieCard({ id, title, year, poster, rating, genre }) {
  const navigate = useNavigate();

  const handle_input = () => {
    navigate(`/moviedetails/${id}`);
  };

  return (
    <div className="w-full sm:w-52 md:w-60 bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
      {/* Poster */}
      <div className="relative">
        <img
          src={poster}
          alt={title}
          className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 hover:scale-105 rounded-t-xl"
        />

        {/* Rating badge */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md text-yellow-400 text-xs sm:text-sm font-semibold">
          {rating}⭐
        </div>
      </div>

      {/* Info & Button */}
      <div className="p-2 sm:p-3 bg-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between h-auto sm:h-20">
        <div className="flex-1 min-w-0 mb-2 sm:mb-0">
          <h3 className="text-white text-sm sm:text-base font-bold line-clamp-2 overflow-hidden">
            {title}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm truncate">
            {year} • {genre}
          </p>
        </div>
        <button
          onClick={handle_input}
          className="flex-shrink-0 bg-yellow-500 text-black font-semibold py-1 px-2 sm:px-3 rounded-md hover:bg-yellow-400 transition-colors duration-300 text-xs sm:text-sm"
        >
          View
        </button>
      </div>
    </div>
  );
}
