import { Link, useNavigate } from "react-router-dom";

export default function HeaderControls({ id }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <button 
        onClick={() => navigate(-1)}
        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-white/10"
      >
        ⬅ Back
      </button>

      <div className="flex gap-2">
        {id > 1 && (
          <Link 
            to={`/detailsPage/${Number(id) - 1}`} 
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-white/10"
          >
            Previous
          </Link>
        )}

        <Link 
          to={`/detailsPage/${Number(id) + 1}`} 
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-white/10"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
