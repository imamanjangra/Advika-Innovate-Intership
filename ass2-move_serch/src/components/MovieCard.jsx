
export default function MovieCard({title , year  ,poster , rating}) {

  return (
    <div className="relative group w-60 bg-black rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-all duration-300 cursor-pointer">
      <img     
        src={poster}
        className="w-full h-80 object-cover transition-all duration-500 group-hover:brightness-75"
      />

      <div className="absolute inset-0  from-black/90 via-black/40 to-transparent
      opacity-100 group-hover:opacity-100 transition duration-500">

      </div>

      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md 
      text-yellow-400 text-xs font-semibold">
        {rating}⭐
      </div>

      <div className="absolute bottom-0 w-full p-4 space-y-1">
        <h3 className="text-lg font-semibold text-white tracking-wide">
          {title}
        </h3>
        <p className="text-gray-300 text-xs">{year}• Action / Thriller</p>
      </div>

    </div>
  );
}
