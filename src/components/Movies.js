import MoviesToolbar from "./MoviesToolbar";
import MoviesList from "./MoviesList";
import {MovieFilterProvider} from "../contexts/MovieFilterContext";

function Movies() {

  return (
    <MovieFilterProvider startingShowRatings={false}>
      <MoviesToolbar />
      <MoviesList />
    </MovieFilterProvider>
  );
}

export default Movies;
