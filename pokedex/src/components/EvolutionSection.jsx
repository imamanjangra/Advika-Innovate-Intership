export default function EvolutionSection() {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold dark:text-white">Evolution</h3>

      <div className="flex justify-center gap-6 mt-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="text-center">
            <div className="w-20 h-20 bg-gray-300 dark:bg-gray-700 rounded mx-auto"></div>
            <p className="mt-1 dark:text-white">Stage Name</p>
          </div>
        ))}
      </div>
    </div>
  );
}
