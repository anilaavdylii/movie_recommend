import React, { useState } from "react";

function Rating({ Source, Value }) {
  return (
    <span className="rating w-100">
      {Source} <strong>Value: {Value}</strong>
    </span>
  );
}

function Ratings({ ratings }) {
  return (
    <div className="ratingBox card h-250">
      <Rating {...ratings[0]} />
    </div>
  );
}

function MovieImage({ id, title }) {
  return (
    <div className="movie-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/movie-${id}.png`}
        width="300"
        alt={`${title}`}
      />
    </div>
  );
}

function MovieFavorite({ favorite, onFavoriteToggle }) {
  const [inTransition, setInTransition] = useState(false);
  function doneCallback() {
    setInTransition(false);
    console.log(
      `In MovieFavorite:doneCallback    ${new Date().getMilliseconds()}`
    );
  }

  return (
    <div className="action padB1">
      <span
        onClick={function () {
          setInTransition(true);
          return onFavoriteToggle(doneCallback);
        }}
      >
        <i
          className={
            favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
          }
        />{" "}
        Favorite{" "}
        {inTransition ? (
          <span className="fas fa-circle-notch fa-spin"></span>
        ) : null}
      </span>
    </div>
  );
}

function MovieDemographics({
  title,
  year,
  released,
  runtime,
  summary,
  favorite,
  onFavoriteToggle,
}) {
  return (
    <div className="movie-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {title}  <br/> 
          {released}  <br/> {runtime}
        </h3>
      </div>
      <MovieFavorite
        favorite={favorite}
        onFavoriteToggle={onFavoriteToggle}
      />
      <div>
        <p className="card-description">{summary}</p>
      </div>
    </div>
  );
}

function Movie({ movie, showRatings, onFavoriteToggle }) {
  const { id, title, year, ratings } = movie;
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <MovieImage id={id} title={title}  />
        <MovieDemographics {...movie} onFavoriteToggle={onFavoriteToggle} />
      </div>
      {showRatings === true ? <Ratings ratings={ratings} /> : null}
    </div>
  );
}

export default Movie;
