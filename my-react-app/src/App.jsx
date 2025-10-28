import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import NavBar from "./components/NavBar/NavBar";
import { MovieProvider } from "./context/MovieContext";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import "./App.css";

function App() {
  const [isDark, setDark] = useState(false);

  return (
    <>
      <div className="app" data-theme={isDark ? "dark" : "light"}>
        <MovieProvider>
          <NavBar isDark={isDark} setDark={setDark} />
          {/* page routes */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </div>
        </MovieProvider>
      </div>
    </>
  );
}

export default App;
