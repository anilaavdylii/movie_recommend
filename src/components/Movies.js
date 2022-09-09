import MoviesToolbar from "./MoviesToolbar";
import MoviesList from "./MoviesList";
import { useState } from "react";

function Movies({ theme, setTheme }) {
  const [showRatings, setShowRatings] = useState(true);

  return (
    <>
      <MoviesToolbar
        theme={theme}
        setTheme={setTheme}
        showRatings={showRatings}
        setShowRatings={setShowRatings}
      />
      <MoviesList showRatings={showRatings} />
    </>
  );
}

export default Movies;
