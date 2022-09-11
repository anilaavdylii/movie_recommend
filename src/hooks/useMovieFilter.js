import {useState} from "react";

function useMovieFilter(startingShowRatings){
    const [showRatings, setShowRatings] = useState(startingShowRatings)

    return{
        showRatings,
        setShowRatings,
    }
}
export default useMovieFilter;