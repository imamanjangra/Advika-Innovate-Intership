import { useState } from "react";

export default function PokemonImages({ data }) {
  const { poke } = data;
  const [value, setValue] = useState(0);

  const imgObj = [
    poke.sprites.other["official-artwork"].front_default,
    poke.sprites.other["official-artwork"].front_shiny,
    poke.sprites.other.home.front_default,
    poke.sprites.other.home.front_shiny,
    poke.sprites.other.dream_world.front_default,
  ];

  const incImage = () => {
    if (value === imgObj.length - 1) {
      setValue(0); 
    } else {
      setValue(value + 1);
    }
  };

  const decImage = () => {
    if (value === 0) {
      setValue(imgObj.length - 1);
    } else {
      setValue(value - 1);
    }
  };

  return (
    <div className="space-y-3 text-center">
      <img
        src={imgObj[value]}
        alt={poke.name}
        className="w-60 mx-auto drop-shadow-2xl"
      />

      <div>
        <button className="px-3 py-1  rounded mx-2" onClick={decImage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle cursor-pointer" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
        </button>
        <button className="px-3 py-1  rounded mx-2" onClick={incImage}>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle cursor-pointer" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
      </svg>
        </button>
      </div>
    </div>
  );
}
