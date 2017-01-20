import { connect } from 'react-redux';
import Hello from '../components/hello';

function mapStateToProps(state, props) {
  return {
    appName: state.reducer.appName
  }
}

export default connect(mapStateToProps)(Hello)
