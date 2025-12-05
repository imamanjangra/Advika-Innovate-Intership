import { useEffect, useState } from "react";

export default function Serchapi(name) {
  const [value, setvalue] = useState(null);

  useEffect(() => {
    if (!name) return;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then(res => res.json())
      .then(data => setvalue(data))
      .catch(() => setvalue(null));
  }, [name]);

  return value;
}
