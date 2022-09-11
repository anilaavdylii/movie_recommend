import React,{createContext} from "react";
import useMovieFilter from "../hooks/useMovieFilter";

const MovieFilterContext= createContext();

function MovieFilterProvider ({children, startingShowRatings = false}){
    const {showRatings, setShowRatings} = useMovieFilter(startingShowRatings);

    return(
        <MovieFilterContext.Provider value={{showRatings, setShowRatings}}>
            {children}
        </MovieFilterContext.Provider>
    );
}
export {MovieFilterContext, MovieFilterProvider}