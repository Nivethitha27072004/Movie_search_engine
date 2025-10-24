import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  function handlefavo() {
    alert("booo ! ");
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
          🤍
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
