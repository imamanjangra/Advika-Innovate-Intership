import { useParams } from "react-router-dom";
import Serchapi from "../Hooks/Serchapi";
import PokemonCard from "../Components/PokemonCard";

export default function SerchResultpage() {
  const { name } = useParams();
  const serch_data = Serchapi(name);

  if (!serch_data?.name) return <h2 className="text-center text-xl mt-10">Searching...</h2>;

  return (
    <div className="flex justify-center mt-10">
      <PokemonCard pokemon={serch_data} />
    </div>
  );
}
