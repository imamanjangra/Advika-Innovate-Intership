

export default function Scoreboard({ userName, logout }) {
  return (
    <div className="bg-[#161B22] px-5 py-3 rounded-lg shadow-md flex items-center gap-4 border border-gray-700">
      <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold">
        {userName[0]?.toUpperCase()}
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-gray-100">{userName}</p>
        
      </div>
      <button
        onClick={logout}
        className="ml-auto px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
