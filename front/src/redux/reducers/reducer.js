import {
  SET_MOVIE,
  SET_SINGLE_MOVIE,
  SET_USER,
  SET_USERS,
  SET_SINGLE_USER
} from "../constants";

const initialState = {
  movie: "",
  singleUser: "",
  user: "",
  users: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE:
      return Object.assign({}, state, { movie: action.film });
    case SET_SINGLE_MOVIE:
      return Object.assign({}, state, { movie: action.film });
    case SET_USERS:
      return Object.assign({}, state, { users: action.users });
    case SET_SINGLE_USER:
      return Object.assign({}, state, { singleUser: action.singleUser });
    case SET_USER:
      return Object.assign({}, state, { user: action.user });

    default:
      return state;
  }
}
