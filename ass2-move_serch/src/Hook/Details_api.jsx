import { useEffect, useState } from "react";

export default function useDetails(id) {
  const [apiData, setApiData] = useState(null);
  const API_KEY = "ed7d88839c4f0e683b44fd50dd8de839";

  useEffect(() => {
    if (!id) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Movie + Trailer API:", data);
        setApiData(data);
      })
      .catch((err) => console.error("API error:", err));
  }, [id]);

  return { apiData };
}
