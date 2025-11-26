export default function Navbar() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md transition">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide">
          Pokédex
        </h1>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-200"
        >
          🌙 / ☀️
        </button>
      </nav>
    </header>
  );
}
