export default function Scoreboard({ userName , logout }) {
  return (
    <div className="bg-white px-5 py-3 rounded-lg shadow-md flex items-center gap-3 border border-gray-200">
      <div className="bg-blue-300 w-10 h-10 rounded-full"></div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-gray-800">{userName}</p>
        <p className="text-gray-500">Score = 10</p>
      </div>
      <button
      onClick={logout}
      className="ml-auto px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
        Logout
      </button>
    </div>
  );
}
