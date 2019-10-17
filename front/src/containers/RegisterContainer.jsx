import React, { Component } from 'react'
import { connect } from 'react-redux'
import Register from "../components/Register"
import store from "../redux/store"
import {fetchMovies} from "../redux/actions/moviesactioncreators"

class MovieContainer extends Component {
    constructor(props) {
        super(props);
        //  this.state = {
        //      movieId : ''
        //  };
    }

    render() {
        return (
            <Register movies={this.props} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        pelis: state.movie
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({

    fetchMovie: (name) => dispatch(fetchMovie(name)),
    fetchMovies : (name) => dispatch(fetchMovies(name))


})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieContainer)