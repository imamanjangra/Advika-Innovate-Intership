export default function Navbar() {

  // Toggle theme
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="w-full shadow-lg sticky top-0 z-50 bg-white dark:bg-gray-900 transition">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">
        <h1 className="text-2xl font-bold text-red-500 tracking-wider">
          Pokédex
        </h1>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          🌙 / ☀️
        </button>
      </nav>
    </header>
  );
}
