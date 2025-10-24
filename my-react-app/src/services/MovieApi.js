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
    /* */
    const data = await response.json()
    return data.results
     
};



