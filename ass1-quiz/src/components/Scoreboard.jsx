

export default function Scoreboard({userName}) {
  return (
    <div className="bg-white px-5 py-3 rounded-lg shadow-md flex items-center gap-3 border border-gray-200">
      <div className="bg-blue-300 w-10 h-10  rounded-full">
        
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{userName}</p>
        <p className="text-gray-500 ">Score = 10</p>
      </div>
    </div>
  );
}

