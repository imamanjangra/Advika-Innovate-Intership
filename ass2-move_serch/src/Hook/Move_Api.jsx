import { useEffect, useState } from "react";

export default function Move_Api() {

  const [apiData, setApiData] = useState(null);
  const API_KEY = "ed7d88839c4f0e683b44fd50dd8de839";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => setApiData(data))
      .catch(err => console.error("API error:", err));
  }, []);

  return apiData;
}
