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
              <span className="text-3xl font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
