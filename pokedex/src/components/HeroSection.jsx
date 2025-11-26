// components/HeroSection.jsx
import React from "react";

export default function HeroSection() {
  const mainImg =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png";

  const imgs = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
  ];

  return (
    <section className="relative w-full py-20 flex flex-col items-center overflow-hidden">

      <div className="absolute w-[450px] h-[450px] rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 md:px-12 w-full">

      
        <div className="flex justify-around w-full max-w-5xl gap-6">
          <Circle img={imgs[0]} />
          <Circle img={imgs[1]} />
        </div>

        <div className="flex justify-between items-center w-full max-w-5xl gap-6">
          <Circle img={imgs[2]} />
          <Circle img={mainImg} big />
          <Circle img={imgs[3]} />
        </div>

        <div className="flex justify-around w-full max-w-5xl gap-6">
          <Circle img={imgs[4]} />
          <Circle img={imgs[5]} />
        </div>

      </div>

     
      <h2 className="mt-8 text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
        Trending Pokemon
      </h2>
    </section>
  );
}


function Circle({ img, big }) {
  return (
    <div
      className={`${
        big
          ? "w-36 h-36 md:w-52 md:h-52 shadow-2xl"
          : "w-20 h-20 md:w-24 md:h-24 shadow-lg"
      } rounded-full bg-white dark:bg-gray-900 border border-gray-200 
      dark:border-gray-700 flex items-center justify-center 
      transition-transform duration-300 hover:scale-110`}
    >
      <img
        src={img}
        className={`${big ? "w-24 md:w-40" : "w-10 md:w-14"} object-contain`}
      />
    </div>
  );
}
