import React from "react";
import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";
import store from "../redux/store";
import { fetchMovies } from "../redux/actions/moviesactioncreators";
import { fetchUser } from "../redux/actions/useractioncreators";
import { fetchFavs } from "../redux/actions/favoritesactioncreators";
import { fetchFavMovie } from "../redux/actions/singlemovieactioncreator";

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: ""
    };
    this.movieFinder = this.movieFinder.bind(this);
  }

  movieFinder(e) {
    e.persist();
    e.preventDefault();
    this.props.fetchFavMovie(e.target.innerText).then(data => {
      this.props.history.push(`/movies/${data.film.imdbID}`);
    });
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.user ? this.props.fetchFavs(this.props.user.id) : null;
  }

  componentDidUpdate() {
    this.props.user
      ? this.props.user.favorites.map(movieId => {
          this.props.fetchFavs(movieId);
        })
      : null;
  }

  render() {
    return this.props.user && this.props.user.id ? (
      <Sidebar
        movie={this.state.movie}
        user={this.props.user}
        favs={this.props.user.favorites}
        movieFinder={this.movieFinder}
      />
    ) : null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pelis: state.movie,
    user: state.user,
    favs: state.favs
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: name => dispatch(fetchUser(name)),
  fetchFavs: userId => dispatch(fetchFavs(userId)),
  fetchFavMovie: movie => dispatch(fetchFavMovie(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
