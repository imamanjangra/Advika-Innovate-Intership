export default function Pagination({ currentPage, setCurrentPage, totalPages }) {

  const createPages = () => {
    let pages = [];

    if (currentPage > 3) pages.push(1);


    if (currentPage > 4) pages.push("...");

    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (i > 1 && i < totalPages) pages.push(i);
    }

 
    if (currentPage < totalPages - 3) pages.push("...");

    if (currentPage < totalPages - 2) pages.push(totalPages);

    return pages;
  };

  const handleClick = (page) => {
    if (page === "...") return;
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">

     
      <button 
        disabled={currentPage === 1} 
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-3 py-1 text-sm rounded bg-gray-300 dark:bg-gray-700 disabled:opacity-40"
      >
        Prev
      </button>

      {createPages().map((page, i) => (
        <button
          key={i}
          onClick={() => handleClick(page)}
          className={`px-3 py-1 rounded text-sm ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : page === "..."
              ? "cursor-default bg-transparent"
              : "bg-gray-200 dark:bg-gray-700 dark:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button 
        disabled={currentPage === totalPages} 
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-3 py-1 text-sm rounded bg-gray-300 dark:bg-gray-700 disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
}
