export default function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const windowSize = 5; 


  const startPage = Math.floor((currentPage - 1) / windowSize) * windowSize + 1;
  const endPage = Math.min(startPage + windowSize - 1, totalPages);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center gap-2 mt-5">

      
      {startPage > 1 && (
        <button 
          onClick={() => setCurrentPage(startPage - 1)}
          className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700"
        >
          ...
        </button>
      )}

      
      {pages.map(num => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          className={`px-3 py-1 rounded 
            ${num === currentPage 
              ? "bg-blue-500 text-white" 
              : "bg-gray-200 dark:bg-gray-600 dark:text-white"
            }`}
        >
          {num}
        </button>
      ))}

   
      {endPage < totalPages && (
        <button 
          onClick={() => setCurrentPage(endPage + 1)}
          className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700"
        >
          ...
        </button>
      )}
    </div>
  );
}
