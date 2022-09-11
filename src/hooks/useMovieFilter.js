import {useState} from "react";

function useMovieFilter(startingShowRatings, startingRatingValue){
    const [showRatings, setShowRatings] = useState(startingShowRatings);
    const [ratingValue, setRatingValue] = useState(startingRatingValue);
    const [ searchQuery, setSearchQuery] = useState("");

    const RATING_VALUES=[
        "1","2","3","4","5","6","7","8","9","10"
    ];


    return{
        showRatings,
        setShowRatings,
        ratingValue,
        setRatingValue,
        searchQuery,
        setSearchQuery,
        RATING_VALUES
    }
}
export default useMovieFilter;