import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import usePokemonList from "../Hooks/usePokemonList";
import HeroSection from "../components/Herosection";
import PokemonCard from "../Components/PokemonCard";
// import FilterBtn from "../components/FilterBtn";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 25;

  const apiList = usePokemonList(currentPage, limit);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    if (!apiList?.results) return;

    Promise.all(apiList.results.map(p => fetch(p.url).then(res => res.json())))
      .then(data => setPokemonData(data));
  }, [apiList]);

  if (!pokemonData.length) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto p-5">
       <HeroSection/>
        {/* <FilterBtn/> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-10">
          {pokemonData.map((pokemon, i) => (
            <PokemonCard key={i} pokemon={pokemon} />
          ))}
        </div>

        {/* pagination */}
        <Pagination 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          totalPages={Math.ceil(apiList?.count / limit)} 
        />
      </div>

      <Footer />
    </div>
  );
}
