import React, { Component } from "react";
import { connect } from "react-redux";
import Movies from "../components/Movies";
import { fetchMovies } from "../redux/actions/moviesactioncreators";

class MovieContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  
  }

  render() {
    return <Movies movies={this.props.pelis} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pelis: state.movie
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMovie: name => dispatch(fetchMovie(name)),
  fetchMovies: name => dispatch(fetchMovies(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
