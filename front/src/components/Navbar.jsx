import React from "react";
import { Link } from "react-router-dom";

const Nav = {
  margin: "2%"
};

const Butt = {
  margin: "3px"
}

export default function({handleUserSubmit, handleUserInput, handleInput, handleSubmit, movie, user }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div  className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
          <Link style={Butt} to="/">
            <button style={Nav} type="button" className="btn btn-light">
              Home
            </button>
          </Link>
          <Link style={Butt}  to="/register">
            <button style={Nav} type="button" className="btn btn-light">
              Log In / Register
            </button>
          </Link>

          <form onSubmit={handleUserSubmit} style={Nav} className="form-inline my-2 my-lg-0">
            <input
              onChange={e => handleUserInput(e)}
              value={user}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Users"
              aria-label="Search"
            />
            
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search Users 
            </button>
           
          </form>
         
          <form onSubmit={handleSubmit} style={Nav} className="form-inline my-2 my-lg-0">
            <input
              onChange={e => handleInput(e)}
              value={movie}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Movies"
              aria-label="Search"
            />

            <button 
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search Movies
            </button>
          </form>
        
        </div>
      </nav>
    </div>
  );
}
