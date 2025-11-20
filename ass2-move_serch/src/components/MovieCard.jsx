import { useNavigate } from "react-router-dom";

export default function MovieCard({id ,  title, year, poster, rating , genre }) {


  const navigate = useNavigate()

  console.log(id)

  const handle_input = () => {
    navigate(`/moviedetails/${id}`)
  }


  return (
    <div className="w-60 bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
      
      
      <div className="relative">
        <img
          src={poster}
          alt={title}
          className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
        />
        
        
        <div className="absolute bottom-0 left-0 w-full h-24 from-gray-900/90 to-transparent"></div>

       
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md text-yellow-400 text-sm font-semibold">
          {rating}⭐
        </div>
      </div>

      
      <div className="p-3 bg-gray-800 flex items-center justify-between h-20">
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-base font-bold line-clamp-2 overflow-hidden">{title}</h3>
          <p className="text-gray-300 text-xs">{year} • {genre}</p>
        </div>
        <button
        onClick={handle_input}
        className="flex-shrink-0 bg-yellow-500 text-black font-semibold py-1 px-3 rounded-md hover:bg-yellow-400 transition-colors duration-300 text-sm">
          View
        </button>
      </div>
    </div>
  );
}
