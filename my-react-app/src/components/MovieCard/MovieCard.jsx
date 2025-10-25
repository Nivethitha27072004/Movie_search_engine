import React from "react";
import "./MovieCard.css";
import { useMovieContext } from "../../context/MovieContext";

function MovieCard({ movie }) {
  const { isfavt, removefavt, addFavt } = useMovieContext();
  const favorite = isfavt(movie.id);

   
  function handlefavo(e) {
    e.preventDefault();
    if (favorite) removefavt(movie.id)
    else addFavt(movie)


  }


  return (
    <div className="movie-card">
      <div className="movie-post">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}  `}
          alt={movie.title}
        />
      </div>
      <div className="movie-overlay">
        <button onClick={handlefavo} className="fav-btn">
        {(favorite)?"❤️":"🤍"}
        </button>
      </div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <h5>{movie.release_date}</h5>
      </div>
    </div>
  );
}

export default MovieCard;
