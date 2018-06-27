import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import { connect } from 'react-redux';
import { toggleLoginStatus } from './actions';
import Router from './components/Router';
import firebase from 'firebase';

class LoginApp extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBViovda0qH0HqQPTL8gwtRIsGlMwonFS4",
            authDomain: "login-bdf86.firebaseapp.com",
            databaseURL: "https://login-bdf86.firebaseio.com",
            projectId: "login-bdf86",
            storageBucket: "login-bdf86.appspot.com",
            messagingSenderId: "1059138630845"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.toggleLoginStatus(true);
            } else {
                this.props.toggleLoginStatus(false);
            }
        });
    }

    render() {
        const {
            loggedIn
        } = this.props.auth;
        return (
            <View style={{flex: 1}}>
                <Header headerText="Authentication"/>
                <Router loggedIn={loggedIn}/>
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { loggedIn } = auth;

    return { loggedIn };
};

const mapDispatchToProps = {
    toggleLoginStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginApp);

