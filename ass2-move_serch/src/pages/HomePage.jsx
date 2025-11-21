import { SearchBar } from "../components/SearchBar";
import { TopMovies } from "../components/TopMovies";
import { HindiMove } from "../components/HindiMove";

export default function HomePage() {
  return (
    <div className="px-4 md:px-6 py-6 md:py-8">
      <SearchBar />
      <TopMovies />
      <HindiMove />
    </div>
  );
}
