import React, { Component } from 'react';
import Home from './Home';
import { Navigator } from '../routes/NavigationRouteSetup';

class Router extends Component {
    render() {
        const {
            loggedIn
        } = this.props;

        if (
            loggedIn === false
        ) {
            return (<Navigator/>);
        }

        return <Home />;
    }
}

export default Router;
