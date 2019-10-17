import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <div className="container" key={props.movie.peli.imdbID}>
      <h2> {props.movie.peli.Title} </h2>
      <img src={props.movie.peli.Poster} />
      <h4> Actors : {props.movie.peli.Actors} </h4>
      <h4> Awards : {props.movie.peli.Awards} </h4>
      <h4> BoxOffice : {props.movie.peli.BoxOffice} </h4>
      <h4> Country : {props.movie.peli.Country} </h4>
      <h4> Director : {props.movie.peli.Director} </h4>
      <h4> Genre : {props.movie.peli.Genre} </h4>
      <h4> Release Date : {props.movie.peli.Released} </h4>

      <button onClick={props.addMovie}> ADD TO FAVORITES</button>
      <button onClick={props.remFromFavs}> REMOVE FROM FAVORITES</button>
    </div>
  );
}
