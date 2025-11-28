import List_poke from "../Hooks/usePokemonList";
import PokemonCard from "../Components/PokemonCard";

export default function list_gride(){
    const api_data_list = List_poke

  if (!api_data_list?.results) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {api_data_list.results.map((poke, index) => (
        <PokemonCard key={index} url={poke.url} index={index}/>
      ))}
    </div>
  )
}