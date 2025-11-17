export function SearchBar() {
  return (
    <div className="w-full flex justify-center mt-6">
      <input
        placeholder="Search for movies..."
        className="w-3/4 md:w-1/2 p-3 rounded-xl bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500"
      />
    </div>
  );
}
