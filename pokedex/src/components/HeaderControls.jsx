import { Link, useNavigate } from "react-router-dom";

export default function HeaderControls({ id }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <button 
        onClick={() => navigate(-1)}
        className="px-4 py-2 rounded-lg bg-gray-200  dark:bg-white/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left cursor-pointer" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
      </button>

      <div className="flex gap-2">
        {id > 1 && (
          <Link 
            to={`/detailsPage/${Number(id) - 1}`} 
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-white/10"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
          </Link>
        )}

        <Link 
          to={`/detailsPage/${Number(id) + 1}`} 
          className="px-4 py-2 rounded-lg bg-gray-200    dark:bg-white/10"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
