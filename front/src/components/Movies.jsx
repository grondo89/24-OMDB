import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <div className="row">
      {props.movies.Error ? (
        <h3> "NO SE ENCONTRARON PELICULAS!" </h3>
      ) : (
        props.movies.Search &&
        props.movies.Search.map(movie => (
          <div key={movie.imdbID} className="col-xs-3">
            <h6> {movie.Title} </h6>
            <div>
              <Link to={`/movies/${movie.imdbID}`}>
                <img src={movie.Poster} />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
