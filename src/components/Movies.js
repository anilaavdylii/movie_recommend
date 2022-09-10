import MoviesToolbar from "./MoviesToolbar";
import MoviesList from "./MoviesList";
import { useState } from "react";

function Movies() {
  const [showRatings, setShowRatings] = useState(true);

  return (
    <>
      <MoviesToolbar
        showRatings={showRatings}
        setShowRatings={setShowRatings}
      />
      <MoviesList showRatings={showRatings} />
    </>
  );
}

export default Movies;
