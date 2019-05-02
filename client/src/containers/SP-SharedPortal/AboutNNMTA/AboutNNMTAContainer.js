import { connect } from 'react-redux';

import AboutNNMTA from '../../../components/SP-SharedPortal/AboutNNMTA/AboutNNMTA';

const mapStateToProps = ({ App: { type } }) => ({ type });

export default connect(mapStateToProps)(AboutNNMTA);
