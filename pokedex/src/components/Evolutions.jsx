export default function Evolutions({ data }) {
  const chain = [];
  let evo = data.evolutionChain.chain;
  while(evo) {
    chain.push(evo.species.name);
    evo = evo.evolves_to[0];
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Evolution</h2>
      <div className="flex gap-4 text-lg capitalize">
        {chain.map((e,i) => (
          <p key={i}>➡ {e}</p>
        ))}
      </div>
    </div>
  );
}
