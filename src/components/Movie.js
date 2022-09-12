import React, { useState, useContext} from "react";
import {MovieFilterContext} from "./../contexts/MovieFilterContext";
import { MovieProvider, MovieContext } from "./../contexts/MovieContext"
import MovieDelete from "./MovieDelete"

function Rating({ Source, Value }) {
  return (
    <span className="rating w-100">
      {Source} <strong>Value: {Value}/10</strong>
    </span>
  );
}

function Ratings() {
  const {ratingValue} = useContext(MovieFilterContext);
  const { movie } = useContext(MovieContext); 
  const ratings = movie.ratings;
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

function ImageWithFallback({ src, ...props }) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  function onError() {
    if (!error) {
      setImgSrc("/images/movie-99999.png");
      setError(true);
    }
  }

  return <img src={imgSrc} {...props} onError={onError} />;
}


function MovieImage() {
  const {movie: {id, title}}= useContext(MovieContext);
  return (
    <div className="movie-img d-flex flex-row justify-content-center align-items-center h-300">
      <ImageWithFallback
        className="contain-fit"
        src={`/images/movie-${id}.png`}
        width="300"
        alt={`${title}`}
      />
    </div>
  );
}

function MovieFavorite() {
  const {movie, updateRecord} = useContext(MovieContext);
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
         updateRecord(
          {
            ...movie, favorite:!movie.favorite,
          },
          doneCallback
         )
        }}
      >
        <i
          className={
            movie.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
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

function MovieDemographics() {
  const { movie } = useContext( MovieContext );
  const {title, released, runtime, summary, link, favorite} = movie;
  return (
    <div className="movie-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {title}  <br/> 
        </h3>
      </div>
      <MovieFavorite  />
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

function Movie({ movie, updateRecord, insertRecord, deleteRecord }) {
  const {showRatings} = useContext(MovieFilterContext);
  return (
    <MovieProvider movie={movie} updateRecord={updateRecord} insertRecord={insertRecord} deleteRecord={deleteRecord}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
        <MovieImage  />
          <MovieDemographics  />
        </div>
        {showRatings === true ? <Ratings /> : null}
        <MovieDelete/>
      </div>
    </MovieProvider>
  );
}

export default Movie;
