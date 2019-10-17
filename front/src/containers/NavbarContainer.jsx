import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/Navbar";
import { fetchMovies } from "../redux/actions/moviesactioncreators";
import { fetchUsers } from "../redux/actions/useractioncreators";

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      user: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleUserInput(e) {
    var input = e.target.value;
    this.setState({ user: input });
  }

  handleUserSubmit(e) {
    let user = this.state.user;
    e.preventDefault();
    if (this.state.user) {
      this.props.fetchUsers(user).then(data => {
        this.props.history.push("/users");
      });
    }
  }

  handleInput(e) {
    var input = e.target.value;
    this.setState({ movie: input });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.movie) {
      this.props
        .fetchMovies(this.state.movie)
        .then(() => this.props.history.push("/movies"));
    }
  }

  render() {
    return (
      <NavBar
        handleInput={this.handleInput}
        movie={this.state.movie}
        handleSubmit={this.handleSubmit}
        handleUserSubmit={this.handleUserSubmit}
        handleUserInput={this.handleUserInput}
        user={this.state.user}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pelis: state.movie,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMovies: name => dispatch(fetchMovies(name)),
  fetchUsers: user => dispatch(fetchUsers(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
