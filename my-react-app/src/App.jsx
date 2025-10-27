import React, { useState } from 'react'
import MovieCard from './components/MovieCard/MovieCard'
import Home from './components/Home/Home'
import {Routes,Route} from "react-router-dom"
import Favorites from './components/Favorites/Favorites';
import NavBar from './components/NavBar/NavBar';
import { MovieProvider } from './context/MovieContext';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  const [isDark, setDark] = useState(false);
 
  return (
    <>
      <div className='app' data-theme={isDark ? "dark" : "light"} >
        <MovieProvider>
          <NavBar></NavBar>
          {/* page routers */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route
                path="/favorites"
                element={<Favorites></Favorites>}
              ></Route>
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </div>
        </MovieProvider>
      </div>
    </>
  );
}

export default App 