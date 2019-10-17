import React from "react";
import { Link } from "react-router-dom";

const favStyle = {
  color: "grey"
};

export default props => (
  <div className="col-xs-2">
    <section className="sidebar">
      <section>
        <h4 className="text-muted">FAVORITES</h4>
        <ul className="list-unstyled" />
        <h4>
          <li onClick={props.movieFinder}>
            {props.user.favorites && props.user.favorites.length > 0
              ? props.user.favorites.map(fav => (
                  <h4 style={favStyle} key={fav.id}>
                    {fav}
                  </h4>
                ))
              : null}
          </li>
        </h4>
      </section>
    </section>
  </div>
);
