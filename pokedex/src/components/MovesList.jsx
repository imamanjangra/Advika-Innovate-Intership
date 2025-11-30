export default function MovesList({ data }) {
  const { poke } = data;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Top Moves</h2>
      <ul className="space-y-2 text-lg capitalize">
        {poke.moves.slice(0, 10).map((m,i) => (
          <li key={i}>{m.move.name}</li>
        ))}
      </ul>
    </div>
  );
}
