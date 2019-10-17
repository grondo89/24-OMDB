import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <div className="row">
      {props.users.length < 1 ? (
        <h3> "NO SE ENCONTRARON USUARIOS!" </h3>
      ) : (
        props.users &&
        props.users.map(user => (
          <div  key={user.id} className="col-xs-3">
            <Link to={`/users/${user.id}`}>
              <h6> {user.email} </h6>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}


// onClick={(e) => props.userSetter(e)}