import React from "react";
import "./MovieCard.css";
import { useMovieContext } from "../../context/MovieContext";
import { Link } from "react-router-dom";
import MovieDetails from "../MovieDetails/MovieDetails";

function MovieCard({ movie }) {
  //favorite button
  const { isfavt, removefavt, addFavt } = useMovieContext();
  const favorite = isfavt(movie.id);
  function handlefavo(e) {
    e.preventDefault();
    if (favorite) removefavt(movie.id);
    else addFavt(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-post">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}  `}
          alt={movie.title}
        />
      </div>
      <div className="details">
        <div className="movie-overlay">
          <button onClick={handlefavo} className="fav-btn">
            {favorite ? "❤️" : "🤍"}
          </button>
          <button className="fav-btn">
            <Link to={`/movie/${movie.id}`}> more</Link>
          </button>
          <h3>{movie.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
