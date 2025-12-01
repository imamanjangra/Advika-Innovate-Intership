import { useNavigate } from "react-router-dom";

export default function Evolutions({ data }) {
  const navigate = useNavigate();

  const chain = [];
  let evo = data.evolutionChain.chain;

  while (evo) {
    chain.push({
      name: evo.species.name,
      id: evo.species.url.split("/")[6],
    });
    evo = evo.evolves_to[0];
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Evolution</h2>

      <div className="flex justify-center items-center gap-10">
        {chain.map((item, index) => (
          <div key={index} className="flex items-center gap-6">

            {/* Clickable evolution card */}
            <div
              onClick={() => navigate(`/detailsPage/${item.id}`)}
              className="cursor-pointer flex flex-col items-center hover:scale-110 transition"
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
                className="w-24 h-24 drop-shadow-lg"
              />
              <p className="capitalize font-semibold mt-2">{item.name}</p>
            </div>

            {index !== chain.length - 1 && (
              <span className="text-3xl font-bold">=</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
