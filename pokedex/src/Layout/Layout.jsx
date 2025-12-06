import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBar from "../Components/SearchBox";

export default function Layout() {
      return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">

     
      <Navbar />
      <SearchBar/>
     
      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
    
};
