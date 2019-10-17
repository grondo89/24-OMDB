import React, { Component } from "react";
import { connect } from "react-redux";
import SingleMovie from "../components/SingleMovie";
import store from "../redux/store";
import { fetchSingleMovie } from "../redux/actions/singlemovieactioncreator";
import { fetchMovies } from "../redux/actions/moviesactioncreators";
import { fetchUser } from "../redux/actions/useractioncreators";
import axios from "axios";

class SingleMovieContainer extends Component {
  constructor(props) {
    super(props);
    // this.state = Object.assign({}, store.getState());
    this.addMovieToFavs = this.addMovieToFavs.bind(this);
    this.remFromFavs = this.remFromFavs.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleMovie(this.props.movieId);
    this.props.fetchUser();
  }

  addMovieToFavs() {
    let user = this.props.user;
    let userId = this.props.user.id;
    let peli = this.props.peli.Title;
    axios
      .put("/addmovie/:userId", { peli, userId })
      .then(data => this.props.fetchUser(user))
      .catch(e => console.log("error!!", e));
  }

  remFromFavs() {
    let user = this.props.user;
    let userId = this.props.user.id;
    let peli = this.props.peli.Title;
    axios
      .put("/remmovie/:userId", { peli, userId })
      .then(() => this.props.fetchUser(user))
      .catch(e => console.log("error!!", e));
  }

  render() {
    return (
      <SingleMovie
        movie={this.props}
        addMovie={this.addMovieToFavs}
        remFromFavs={this.remFromFavs}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    peli: state.movie,
    movieId: ownProps.match.params.id,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSingleMovie: name => dispatch(fetchSingleMovie(name)),
  fetchMovies: name => dispatch(fetchMovies(name)),
  fetchUser: name => dispatch(fetchUser(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleMovieContainer);
