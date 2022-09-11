import React,{createContext} from "react";
import useMovieFilter from "../hooks/useMovieFilter";

const MovieFilterContext= createContext();

function MovieFilterProvider ({children, startingShowRatings = false, startingRatingValue="10"}){
    const {showRatings, setShowRatings, 
        ratingValue, setRatingValue, 
        searchQuery, setSearchQuery, 
        RATING_VALUES} = useMovieFilter(startingShowRatings, startingRatingValue);

    return(
        <MovieFilterContext.Provider value={{showRatings, setShowRatings, 
                            ratingValue, setRatingValue, 
                            searchQuery, setSearchQuery, 
                            RATING_VALUES}}>
            {children}
        </MovieFilterContext.Provider>
    );
}
export {MovieFilterContext, MovieFilterProvider}