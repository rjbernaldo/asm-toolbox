import { connect } from 'react-redux';
import Credentials from '../components/Credentials';

const mapStateToProps = (state) => {
  user: state.user
};

export default connect(mapStateToProps)(Credentials);
