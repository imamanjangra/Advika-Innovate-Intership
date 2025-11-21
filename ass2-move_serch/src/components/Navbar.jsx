import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

      
        <NavLink to="/">
          <h1 className="text-2xl font-bold cursor-pointer">MovieSearch</h1>
        </NavLink>

      
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

      
        <ul
          className={`
            flex flex-col lg:flex-row lg:items-center gap-6 text-lg 
            absolute lg:static left-0 w-full lg:w-auto bg-gray-900 z-20
            p-5 lg:p-0 transition-all duration-300 
            ${open ? "top-16 " : "top-[-400px]  "}
          `}
        >
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `cursor-pointer hover:text-blue-400 ${
                isActive ? "text-blue-400 font-semibold" : "opacity-90"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/TopMoves"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `cursor-pointer hover:text-blue-400 ${
                isActive ? "text-blue-400 font-semibold" : "opacity-90"
              }`
            }
          >
            Top Movies
          </NavLink>

          <NavLink
            to="/HindiMoves"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `cursor-pointer hover:text-blue-400 ${
                isActive ? "text-blue-400 font-semibold" : "opacity-90"
              }`
            }
          >
            Hindi Movies
          </NavLink>

          
        </ul>
      </div>
    </nav>
  );
}
