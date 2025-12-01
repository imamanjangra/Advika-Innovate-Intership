import { useEffect, useState } from "react";

export default function PokemonImageViewer({ id }) {
  const [sprites, setSprites] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setSprites(data.sprites));
  }, [id]);

  if (!sprites) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-300">
        Loading Images...
      </p>
    );
  }

  const normalFront = sprites.front_default;
  const normalBack = sprites.back_default;

  const shinyFront = sprites.front_shiny;
  const shinyBack = sprites.back_shiny;

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold dark:text-white text-gray-800">
        Sprite Preview
      </h2>

      <div className="flex gap-10 justify-center">

        {/* NORMAL */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 dark:border-gray-600 flex flex-col items-center w-[260px]">
          <p className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3">
            Normal
          </p>

          <div className="flex gap-5 items-center justify-center min-h-[120px]">
            {normalFront ? (
              <img src={normalFront} className="w-32 drop-shadow-md hover:scale-110 transition" />
            ) : null}

            {normalBack ? (
              <img src={normalBack} className="w-32 drop-shadow-md hover:scale-110 transition" />
            ) : null}

            {!normalFront && !normalBack && (
              <p className="text-gray-500">No Image</p>
            )}
          </div>
        </div>

        {/* SHINY */}
        <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-xl shadow-lg border-2 dark:border-yellow-600 flex flex-col items-center w-[260px]">
          <p className="font-semibold text-lg text-yellow-700 dark:text-yellow-200 mb-3">
            Shiny 
          </p>

          <div className="flex gap-5 items-center justify-center min-h-[120px]">
            {shinyFront ? (
              <img src={shinyFront} className="w-32 drop-shadow-md hover:scale-110 transition" />
            ) : null}

            {shinyBack ? (
              <img src={shinyBack} className="w-32 drop-shadow-md hover:scale-110 transition" />
            ) : null}

            {!shinyFront && !shinyBack && (
              <p className="text-gray-500">No Shiny</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
