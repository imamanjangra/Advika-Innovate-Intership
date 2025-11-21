import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-14">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        
          <div>
            <h2 className="text-3xl font-bold">MovieSearch</h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Discover movies, check ratings, explore genres and watch trailers — 
              everything in one simple and fast platform.
            </p>
          </div>

        
          <div>
            <h3 className="text-xl font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-gray-300 text-sm">

              <NavLink to="/" className="block hover:text-blue-400 transition">
                Home
              </NavLink>

              <NavLink to="/TopMoves" className="block hover:text-blue-400 transition">
                Top Movies
              </NavLink>

              <NavLink to="/HindiMoves" className="block hover:text-blue-400 transition">
                Hindi Movies
              </NavLink>

              

            </ul>
          </div>

     
          <div>
            <h3 className="text-xl font-semibold mb-3">Website Info</h3>
            <p className="text-gray-400 text-sm">
              Powered by TMDB API  
              <br />
              Designed for fast movie search  
              <br />
              Built with React + TailwindCSS  
            </p>
          </div>

        </div>

      
        <div className="border-t border-gray-700 mt-10 pt-4">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} MovieSearch — All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
