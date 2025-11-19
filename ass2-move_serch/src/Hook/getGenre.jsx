import { useEffect, useState } from "react";

export default function Genre_Api() {

  const [apiData, setApiData] = useState(null);
  const API_KEY = "ed7d88839c4f0e683b44fd50dd8de839";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(resp => resp.json())
      .then(data =>  setApiData(data))
      .catch(err => console.error("API error:", err));
  }, []);

  return apiData;
}
