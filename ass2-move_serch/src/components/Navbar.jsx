import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
      <NavLink to="/">
      <h1 className="text-2xl font-bold">MovieSearch</h1>
      </NavLink>
      <ul className="flex gap-6 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `cursor-pointer hover:text-blue-400 ${
              isActive ? "text-blue-400 font-semibold" : "opacity-90"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/searchresults"
          className={({ isActive }) =>
            `cursor-pointer hover:text-blue-400 ${
              isActive ? "text-blue-400 font-semibold" : "opacity-90"
            }`
          }
        >
          Top Movies
        </NavLink>
      </ul>
    </nav>
  );
}
