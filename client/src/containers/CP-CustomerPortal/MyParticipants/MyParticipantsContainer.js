import { connect } from 'react-redux';

import MyParticipants from '../../../components/CP-CustomerPortal/MyParticipants/MyParticipants';

const mapStateToProps = ({ App: { id } }) => ({ id });

export default connect(mapStateToProps)(MyParticipants);
