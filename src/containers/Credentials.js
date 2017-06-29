import { connect } from 'react-redux';
import Credentials from '../components/Credentials';
import { login, logout } from '../actions/credentials';

const mapStateToProps = (state) => {
  return {
    email: state.credentials.email,
    password: state.credentials.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Credentials);
