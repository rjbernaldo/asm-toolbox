import { LOGIN, LOGOUT } from '../actions/credentials';

const initialState = {
  email: '',
  password: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, action.credentials);
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
