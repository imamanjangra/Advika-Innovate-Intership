export default function PokemonImages({ data }) {
  const { poke } = data;
  // console.log(poke)
  return (
    <div className="space-y-3 text-center">
      <img 
        src={poke.sprites.other["official-artwork"].front_default}
        alt={poke.name}
        className="w-60 mx-auto drop-shadow-2xl"
      />
    </div>
  );
}
