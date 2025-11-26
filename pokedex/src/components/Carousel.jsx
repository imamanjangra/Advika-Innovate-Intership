export default function Carousel() {
  return (
    <div className="flex justify-center gap-3 mt-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="w-28 h-28 bg-gray-300 dark:bg-gray-700 rounded"></div>
      ))}
    </div>
  );
}
