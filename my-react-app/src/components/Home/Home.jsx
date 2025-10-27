import React, { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useState } from "react";
import "./Home.css";
import { getpopularMovies, searchMovies } from "../../services/MovieApi";
import loadingGif from "../../assets/loadingGif.gif";

function Home() {
  const [serchQuery, setSerchQuary] = useState();
   const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!serchQuery.trim()) alert("Enter a movie name to search");
    if (loading) return;
    setLoading(true);

    try {

      //searching wanted movies
      const searchResults = await searchMovies(serchQuery);
      //if movie not availabe
      if (searchResults.length === 0) {
        setError("No movies found for your search");
        setMovies([]);
        return;
      }
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      //if any problme in fetching
      console.log(err.message);
      setError("Oops! Something went wrong.... Please try again later");
      setMovies([]);
      return;
    } finally {
      setLoading(false);
    }
  };

// getting all propul from api
 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const loadPopularMovies = await getpopularMovies();
        setMovies(loadPopularMovies);
      } catch (err) {
        console.log(err.message);
        setError("something went wrong ");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);
  console.log(movies);



  return (
    <>
      <div className="home">
        {/* search bar */}
        <div className="serch-form">
          <form action="submit" onSubmit={handleSearch} className="serch-form">
            <input
              type="text"
              placeholder="Search the Movie Name...."
              className="serch-input"
              onChange={(e) => setSerchQuary(e.target.value)}
            />
            <button>search</button>
          </form>
        </div>

        {/* error */}
        {error && (
          <div className="error-message">
            <h2 className="error-text">{error}</h2>
          </div>
        )}

        {/*gets the data from the api and provides as movie card*/}
        {loading ? (
          <div className="loading">
            <img src={loadingGif} alt="loading..." />
          </div>
        ) : (
            //maping data from api
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
