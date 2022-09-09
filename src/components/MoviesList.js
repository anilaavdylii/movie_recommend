import Movie from "./Movie";
import ReactPlaceHolder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../MovieData";

function MoviesList({ showRatings }) {
  const {
    data: moviesData,
    requestStatus,
    error,
    updateRecord,
  } = useRequestDelay(2000, data);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>loading Movie Data Failed {error}</b>
      </div>
    );
  }


  return (
    <div className="container speakers-list">
      <ReactPlaceHolder
        type="media"
        rows={20}
        className="speakerslist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className="row">
          {moviesData.map(function (movie) {
            return (
              <Movie
                key={movie.id}
                movie={movie}
                showRatings={showRatings}
                onFavoriteToggle={(doneCallback) => {
                  updateRecord(
                    {
                      ...movie,
                      favorite: !movie.favorite,
                    },
                    doneCallback
                  );
                }}
              />
            );
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default MoviesList;
