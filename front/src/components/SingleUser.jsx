import React from "react";
import { Link } from "react-router-dom";
  
export default function(props) {
  return (
    <div className="container">
      <h2>User Favorites</h2>
      {/* {props.user ? console.log(props.user.favorites) : null} */}

      <li onClick={props.movieFinder}>
        {props.user
          ? props.user.favorites.map(fav => <h4 key={fav.id}>{fav}</h4>)
          : "CARGANDO USUARIOS"}
      </li>
    </div>
  );
}
