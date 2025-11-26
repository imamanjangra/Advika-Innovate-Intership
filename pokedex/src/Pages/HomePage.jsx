import Navbar from "../components/Navbar";


import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import PokemonCard from "../Components/PokemonCard";
import SearchBar from "../Components/SearchBox";
import HeroSection from "../components/Herosection";

export default function Home() {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Navbar />
        <HeroSection/>
      <div className="max-w-6xl mx-auto p-5">
        <SearchBar/>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-10">
          <PokemonCard/>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </div>

        <Pagination />
      </div>

      <Footer />
    </div>
  );
}
