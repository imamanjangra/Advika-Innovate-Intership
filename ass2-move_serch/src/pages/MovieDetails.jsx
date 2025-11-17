export default function MovieDetails() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3 bg-gray-800 h-96 rounded-xl shadow-xl"></div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Movie Title</h1>
        <p className="text-lg opacity-80">Release Year: 2024</p>
        <p className="opacity-70 leading-relaxed">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}
