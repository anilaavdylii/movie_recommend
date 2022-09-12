import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieDelete(){
    const { movie, deleteRecord } = useContext(MovieContext);

    return (
      <span className="session w-100">
        <a href="#" className="remSes">
          <i
            onClick={(e) => {
              e.preventDefault();
              if (
                window.confirm("Are you sure you want to delete this movie?")
              ) {
                deleteRecord(movie);
              }
            }}
          >
            -
          </i>
        </a>
        <span className="padL2">Delete Movie</span>
      </span>
    );
}

export default MovieDelete;