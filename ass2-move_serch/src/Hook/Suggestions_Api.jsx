import { useEffect, useState } from "react";


export default function useSearchResult(movie) {
  const [apiData, setApiData] = useState(null);
  const API_KEY = "ed7d88839c4f0e683b44fd50dd8de839";
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    if (!movie) return;

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {setApiData(data); setLoading(false)})
      .catch((err) => console.error("API error:", err));
  }, [movie]);

  return {apiData, loading};
}
