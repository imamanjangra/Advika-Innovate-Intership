import { useEffect, useState } from "react";

export default function Serchapi(name) {

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!name) return;

    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
      .then(res => res.json())
      .then(data => {
        const matched = data.results.filter(p =>
          p.name.toLowerCase().includes(name.toLowerCase())
        );
        setResults(matched);
      });
  }, [name]);

  return results;
}
