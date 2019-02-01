import { connect } from 'react-redux';
import { toggleTheme } from '../../../actions/ShellHeaderActions';

import ShellHeader from '../../../components/NP-NonPortal/Shell/ShellHeader/ShellHeader';

const mapStateToProps = ({ ShellHeader: { themeChoice } }) => ({ themeChoice });

const mapDispatchToProps = dispatch => ({
    toggleTheme: () => {
        dispatch(toggleTheme());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShellHeader);
