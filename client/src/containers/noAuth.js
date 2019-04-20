import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// This HOC is to be used for routes for users with no authentication
export default (ComposedComponent) => {
    const noAuth = (props) => {
        const { authenticated, type } = props;

        if (authenticated) {
            switch (type) {
                case 2:
                    return <Redirect to="/admin/dashboard" />;
                case 1:
                    return <Redirect to="/teacher/dashboard" />;
                case 0:
                    return <Redirect to="/customer/dashboard" />;
                default:
                    break;
            }
        }

        return <ComposedComponent {...props} />;
    };

    const mapStateToProps = ({ App: { authenticated, type } }) => ({ authenticated, type });

    return connect(mapStateToProps)(noAuth);
};
