import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [value, setValue] = useState("");
  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // setQuery(value); 
    navigate(`/search/${value}`)
    setValue(""); 
  };

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <form onSubmit={handleSubmit} className="flex w-3/4 md:w-1/2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Search for movies..."
          className="w-full p-3 rounded-l-xl bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500"
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white rounded-r-xl hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>

      
    </div>
  );
}
