import { connect } from 'react-redux';

import EventsCalendar from '../../../components/SP-SharedPortal/EventsCalendar/EventsCalendar';

const mapStateToProps = ({ App: { type } }) => ({ type });

export default connect(mapStateToProps)(EventsCalendar);
