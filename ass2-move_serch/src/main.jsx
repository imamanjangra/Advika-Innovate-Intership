import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";


import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";
import Layout from "./Layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage />} />
      <Route path="moviedetails" element={<MovieDetails />} />
      <Route path="searchresults" element={<SearchResults />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
