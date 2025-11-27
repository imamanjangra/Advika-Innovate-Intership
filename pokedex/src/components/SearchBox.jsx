export default function SearchBar() {
  return (
    <div className="relative max-w-md mx-auto mt-6">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 dark:text-gray-400">
        
      </span>
      <input
        type="text"
        placeholder="Search Pokémon..."
        className="w-full pl-10 p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-gray-400 outline-none transition"
      />
    </div>
  );
}
