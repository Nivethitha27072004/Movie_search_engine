import { useEffect, useState } from "react";
import { getMoviesDetails } from "../../services/MovieApi";
import { useParams } from "react-router-dom";
import "./MoviDetails.css";
import  loadingGif  from "../../assets/loadingGif.gif"

function MovieDetails() {
  const { id } = useParams(); // get movie id from URL
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        setLoading(true);
        const data = await getMoviesDetails(id); // pass movie ID here
        setDetails(data);
      } catch (err) {
        setError("Movie details not available...");
        setDetails({});
      } finally {
        setLoading(false);
      }
    };

    loadDetails();
  }, [id]);

  return (
    <div className="movie-details">
      {loading ? (
        <div className="loading">
          <img
            src={loadingGif} 
            alt="Loading..."
           
          />
        </div>
      ) : error ? (
        <div className="error-message">
          <h2 className="error-text">{error}</h2>
        </div>
      ) : (
        <>
          <div className="img">
            {details.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                alt={details.title || "Movie poster"}
              />
            ) : (
              <p>No image available</p>
            )}
          </div>

          <div className="details">
            <h2>Movie Title: {details.title}</h2>
            <h3>Released Date: {details.release_date}</h3>
            <p className="overview">
              <b>Story Line:</b> <i>{details.overview}</i>
            </p>
            <p>Rating: {details.vote_average}</p>
            <p>Language: {details.original_language}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
