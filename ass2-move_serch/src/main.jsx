import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";


import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";
import Layout from "./Layout/Layout";
import Topmoves from "./pages/Topmoves";
import HindiPage from "./pages/HindiPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<HomePage />} />
      <Route path="/HindiMoves" element={<HindiPage/>}/>
      <Route path="/TopMoves" element={<Topmoves/>}/>
      <Route path="/moviedetails/:id" element={<MovieDetails />} />
      <Route path="/search/:query" element={<SearchResults />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
