import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// This HOC is to be used for routes that require authentication
export default (ComposedComponent, accessType) => {
    const withAuth = (props) => {
        const { authenticated, type } = props;

        if (authenticated) {
            if (type === accessType) {
                return <ComposedComponent {...props} />;
            }
        }

        return <Redirect to="/" />;
    };

    const mapStateToProps = ({ App: { authenticated, type } }) => ({ authenticated, type });

    return connect(mapStateToProps)(withAuth);
};
