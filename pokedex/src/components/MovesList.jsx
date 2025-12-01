import { useState, useEffect } from "react";

export default function MovesList({ data }) {
  const { poke } = data;
  const [movesDetails, setMovesDetails] = useState([]);

  useEffect(() => {
    const topMoves = poke.moves.slice(0, 10);

    Promise.all(
      topMoves.map((m) =>
        fetch(m.move.url)
          .then((res) => res.json())
          .then((moveData) => ({
            name: moveData.name,
            type: moveData.type.name,
            power: moveData.power || "-",
            accuracy: moveData.accuracy || "-",
          }))
      )
    ).then(setMovesDetails);
  }, [poke.moves]);

  if (!movesDetails.length)
    return <p className="text-center py-4 text-lg">Loading moves...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-800">
        Top 10 Moves
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-xl">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left dark:text-white">Move Name</th>
              <th className="px-4 py-2 text-left dark:text-white">Type</th>
              <th className="px-4 py-2 text-left dark:text-white">Power</th>
              <th className="px-4 py-2 text-left dark:text-white">Accuracy</th>
            </tr>
          </thead>

          <tbody>
            {movesDetails.map((move, i) => (
              <tr
                key={i}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="capitalize px-4 py-2">{move.name}</td>
                <td className="capitalize px-4 py-2">{move.type}</td>
                <td className="px-4 py-2">{move.power}</td>
                <td className="px-4 py-2">{move.accuracy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
