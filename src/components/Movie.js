import React, { useState, useContext} from "react";
import {MovieFilterContext} from "./../contexts/MovieFilterContext";

function Rating({ Source, Value }) {
  return (
    <span className="rating w-100">
      {Source} <strong>Value: {Value}/10</strong>
    </span>
  );
}

function Ratings({ ratings }) {
  const {ratingValue} = useContext(MovieFilterContext);

  return (
    <div className="ratingBox card h-250">
      {ratings.filter(function(rating){
        return rating.Value === ratingValue;
      })
      .map(function(rating){
        return(
          <div className="rating w-100" key={rating.id}>
            <Rating {...rating}/>
          </div>
        )
      })
      }
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
  id,
  title,
  released,
  runtime,
  summary,
  link,
  favorite,
  onFavoriteToggle,
}) {
  return (
    <div className="movie-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {title}  <br/> 
        </h3>
      </div>
      <MovieImage id={id} title={title}  />
      <MovieFavorite
        favorite={favorite}
        onFavoriteToggle={onFavoriteToggle}
      />
      <div>
        <p className="card-link"> {released}  <br/> {runtime}<br/><br/><a href={link} target="_blank">Watch now on THEFLIXER"</a></p>
      </div>
      <br/>
      <div>
        <p className="card-description">{summary}</p>
      </div>
      <br/>
      
    </div>
  );
}

function Movie({ movie, onFavoriteToggle }) {
  const { id, title, year, ratings } = movie;
  const {showRatings} = useContext(MovieFilterContext);
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        
        <MovieDemographics {...movie} onFavoriteToggle={onFavoriteToggle} />
      </div>
      {showRatings === true ? <Ratings ratings={ratings} /> : null}
    </div>
  );
}

export default Movie;
