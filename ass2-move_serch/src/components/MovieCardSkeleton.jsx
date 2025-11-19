export function MovieCardSkeleton() {
  return (
    <div className="w-60 bg-gray-900 rounded-xl overflow-hidden shadow-xl animate-pulse">
      
      <div className="w-full h-80 bg-gray-700"></div>
      <div className="p-3 bg-gray-800 h-20 flex items-center justify-between">
        
        <div className="flex-1 min-w-0">
          <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-600 rounded w-1/2"></div>
        </div>

        <div className="h-6 bg-yellow-500 rounded w-16 "></div>
      </div>
    </div>
  );
}
