export default function MovieCard() {
  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-lg">

    
      <div className="relative h-80 w-full overflow-hidden">

       
        <img
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800"
          alt="Movie Poster"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

       
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>
      </div>

   
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold">The Dark Knight</h2>
        <p className="text-gray-400 text-sm">Release Year: 2008</p>
      </div>

      
      <div className="p-4 border-t border-gray-800 flex justify-between items-center">
        <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          View Details
        </button>

        <span className="text-yellow-400 font-bold">⭐ 9.0</span>
      </div>
    </div>
  );
}
