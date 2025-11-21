export function MovieCardSkeleton() {
  return (
    <div className="w-full sm:w-52 md:w-60 bg-gray-900 rounded-xl overflow-hidden shadow-xl animate-pulse">
      {/* Poster Skeleton */}
      <div className="w-full h-60 sm:h-72 md:h-80 bg-gray-700 rounded-t-xl"></div>

      {/* Info Skeleton */}
      <div className="p-2 sm:p-3 bg-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between h-auto sm:h-20">
        {/* Title & Genre Skeleton */}
        <div className="flex-1 min-w-0 mb-2 sm:mb-0">
          <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-600 rounded w-1/2"></div>
        </div>

        {/* Button Skeleton */}
        <div className="h-6 bg-yellow-500 rounded w-16 sm:w-16"></div>
      </div>
    </div>
  );
}
