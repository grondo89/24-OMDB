import React, { Component } from "react";
import { connect } from "react-redux";
import SingleUser from "../components/SingleUser";
import { fetchSingleUser } from "../redux/actions/useractioncreators";
import { setSingleUser } from "../redux/actions/useractioncreators";
import { fetchFavMovie } from "../redux/actions/singlemovieactioncreator";

class SingleUserContainer extends Component {
  constructor(props) {
    super(props);
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
    let user = this.props.userId;
    this.props.fetchSingleUser(this.props.userId);
  }

  render() {
    return (
      <SingleUser user={this.props.singleUser} movieFinder={this.movieFinder} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    singleUser: state.singleUser[0],
    userId: ownProps.match.params.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSingleUser: user => dispatch(fetchSingleUser(user)),
  fetchFavMovie: movie => dispatch(fetchFavMovie(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleUserContainer);
