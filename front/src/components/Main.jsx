import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavbarContainer from "../containers/NavbarContainer";
import MoviesContainer from "../containers/MoviesContainer";
import SingleMovieContainer from "../containers/SingleMovieContainer";
import SideBarContainer from "../containers/SideBarContainer";
import RegisterContainer from "../containers/RegisterContainer";
import UsersContainer from "../containers/UsersContainer";
import SingleUserContainer from "../containers/SingleUserContainer";
import Home from "../containers/HomeContainer";

class Main extends Component {
  render() {
    return (
      <div id="App" className="container-fluid">
        <Route component={NavbarContainer} />
        <div className="col-xs-2">
          <Route component={SideBarContainer} />
        </div>
        <div className="col-xs-10">
          <Switch>
            <Route exact path="/movies" render={() => <MoviesContainer />} />
            <Route exact path="/users" component={UsersContainer} />
            <Route exact path="/users/:id" component={SingleUserContainer} />
            <Route path="/movies/:id" component={SingleMovieContainer} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Main;

//   <Route path ="/movies/:id" render={ () => <SingleMovieContainer/> }/>
