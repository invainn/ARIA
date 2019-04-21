import { connect } from 'react-redux';

import Dashboard from '../../../components/SP-SharedPortal/Dashboard/Dashboard';

const mapStateToProps = ({ App: { type, name } }) => ({ type, name });

export default connect(mapStateToProps)(Dashboard);
