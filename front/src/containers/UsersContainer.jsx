import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/actions/useractioncreators";
import Users from "../components/Users";
import { fetchSingleUser } from "../redux//actions/useractioncreators";
import { setSingleUser } from "../redux/actions/useractioncreators";

class UsersContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <Users users={this.props.users} userSetter={this.userSetter} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUsers: user => dispatch(fetchUsers(user)),
  fetchSingleUser: user => dispatch(fetchSingleUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
