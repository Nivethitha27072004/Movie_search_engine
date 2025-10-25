import { Children, createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext=()=>useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [favt, setFavt] = useState([])
    

    useEffect(() => {
        const stroredFavts = localStorage.getItem("favt")
        if(stroredFavts) setFavt(JSON.parse(stroredFavts))
    }, [])
    
    useEffect(() => {
        localStorage.setItem('favt',JSON.stringify(favt))
    },[favt])
    

    const addFavt = (movie) => {
        setFavt(prev=>[...prev,movie])
    }

    const removefavt = (movieId) => {
        setFavt(prev=>prev.filter(movie=>movie.id!==movieId))
    }
    const isfavt = (movieId) => {
       return favt.some((movie) => movie.id === movieId);
    }
    
    const value = {
        favt,addFavt,removefavt,isfavt
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
