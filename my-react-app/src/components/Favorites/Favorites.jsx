import React from 'react';
import "./Favorites.css";
import { useMovieContext } from "../../context/MovieContext";
import MovieCard  from "../MovieCard/MovieCard";

function Favorites() {
  const { favt } = useMovieContext();

  if (favt) {
    return (
      <div>
        <h3>your Favorites</h3>
        <div className="movie-grid">
          {favt.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Noooo Favorites yet....</h3>
      </div>
    );
  }
 
}

export default Favorites 