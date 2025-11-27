import EvolutionSection from "../components/EvolutionSection";
import MovesTable from "../components/MovesTable";

export default function PokemonDetailsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold dark:text-white">Pokémon Details</h2>

      </div>

     
      
      <EvolutionSection />
      <MovesTable />
    </div>
  );
}
