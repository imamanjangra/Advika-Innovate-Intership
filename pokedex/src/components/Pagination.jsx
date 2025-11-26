export default function Pagination() {
  return (
    <div className="flex justify-center gap-3 mt-10">
      {[1, 2, 3, 4].map((num) => (
        <button
          key={num}
          className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {num}
        </button>
      ))}
    </div>
  );
}
