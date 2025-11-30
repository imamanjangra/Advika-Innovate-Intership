export default function StatsChart({ data }) {
  const { poke } = data;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Stats</h2>
      {poke.stats.map((stat, i) => (
        <div key={i} className="mb-2">
          <p className="capitalize">{stat.stat.name}</p>
          <div className="h-3 bg-gray-300 dark:bg-white/10 rounded-lg overflow-hidden">
            <div style={{ width: `${stat.base_stat}%` }}
                 className="h-full bg-green-500 dark:bg-green-400 transition-all" />
          </div>
        </div>
      ))}
    </div>
  );
}
