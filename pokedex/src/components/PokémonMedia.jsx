export default function PokemonMedia({ data }) {
  const { poke } = data;

  return (
    <div className="space-y-3 text-center">
      <img 
        src={poke.sprites.other["official-artwork"].front_default}
        alt={poke.name}
        className="w-60 mx-auto drop-shadow-2xl"
      />
      <p className="text-sm opacity-70">Tap to view shiny / back images (soon)</p>
    </div>
  );
}
