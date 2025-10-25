import React from 'react'
import MovieCard from './components/MovieCard/MovieCard'
import Home from './components/Home/Home'
import {Routes,Route} from "react-router-dom"
import Favorites from './components/Favorites/Favorites';
import NavBar from './components/NavBar/NavBar';
import { MovieProvider } from './context/MovieContext';



function App() {
  return (
    <>
      <MovieProvider>
        <NavBar></NavBar>  
        {/* page routers */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/favorites" element={<Favorites></Favorites>}></Route>
          </Routes>
        </div>
      </MovieProvider>
    </>
  );
}

export default App 