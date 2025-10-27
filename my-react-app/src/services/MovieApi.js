//api fetching

const API_KEY = "4a78938b4160257d3670903568ca712d";
const BASE_KEY = "https://api.themoviedb.org/3";

 
/* to get the data from and display*/ 
export const getpopularMovies = async () => {
    /*data fetched*/
    const response = await fetch(`${BASE_KEY}/movie/popular?api_key=${API_KEY}`);
    /** storing as json */
    const data = await response.json()
    return data.results
     
};
export const searchMovies = async (query) => {
    /* serches the data*/
    const response = await fetch(`${BASE_KEY}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};

export const getMoviesDetails = async (id) => {
   /*get the all data as odject and for onlyone id */
    const response = await fetch(`${BASE_KEY}/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json()
    return data /** details is a objet  */
};



