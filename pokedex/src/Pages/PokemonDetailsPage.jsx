import { useParams } from "react-router-dom";
import detailpage_api from "../Hooks/detailpage_api";
import HeaderControls from "../components/HeaderControls";
import PokemonImages from "../components/PokemonImages";
import PokemonMainInfo from "../components/PokemonMainInfo";
import StatsChart from "../components/StatsChart";
import Evolutions from "../components/Evolutions";
import MovesList from "../components/MovesList";
import Loader from "../components/Loader";

export default function PokemonDetailsPage() {

  const { id } = useParams(); 
  const api_data = detailpage_api(id);
  console.log(api_data);
  if (!api_data) return <div className="text-center p-10 text-xl"><Loader/></div>;

  return (
    <div className="min-h-screen bg-gray-50  dark:bg-gray-900 dark:text-gray-100 transition-all duration-300">
      <div className="max-w-6xl mx-auto p-6 space-y-10">

        <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-md 
        dark:bg-white/5 dark:border-white/10 dark:shadow-lg transition-all">
          
          <HeaderControls id={id} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <PokemonImages data={api_data} />
            <PokemonMainInfo data={api_data} />
          </div>
        </div>

        
        <div className="p-6 rounded-xl bg-white border shadow-md border-gray-200 
        dark:bg-white/5 dark:border-white/10">
          <StatsChart data={api_data} />
        </div>

        <div className="p-6 rounded-xl bg-white border shadow-md border-gray-200 
        dark:bg-white/5 dark:border-white/10">
          <Evolutions data={api_data} />
        </div>

        <div className="p-6 rounded-xl bg-white border shadow-md border-gray-200 
        dark:bg-white/5 dark:border-white/10">
          <MovesList data={api_data} />
        </div>

      </div>
    </div>
  );
}
