import { connect } from 'react-redux';

import FAQ from '../../../components/SP-SharedPortal/FAQ/FAQ';

const mapStateToProps = ({ App: { type } }) => ({ type });

export default connect(mapStateToProps)(FAQ);
