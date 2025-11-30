export default function PokemonMainInfo({ data }) {
  const { poke } = data;

  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">{poke.name}</h1>

      <div className="flex gap-3 mt-3">
        {poke.types.map((t, i) => (
          <span key={i} className="px-3 py-1 rounded-full bg-gray-300 dark:bg-white/10">
            {t.type.name}
          </span>
        ))}
      </div>

      <p className="mt-4 text-lg">Height: {poke.height}</p>
      <p className="text-lg">Weight: {poke.weight}</p>

      <div className="mt-3">
        <h2 className="font-semibold">Abilities:</h2>
        <ul className="list-disc list-inside">
          {poke.abilities.map((a,i) => (
            <li key={i} className="capitalize">{a.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
