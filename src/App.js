import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBViovda0qH0HqQPTL8gwtRIsGlMwonFS4",
            authDomain: "login-bdf86.firebaseapp.com",
            databaseURL: "https://login-bdf86.firebaseio.com",
            projectId: "login-bdf86",
            storageBucket: "login-bdf86.appspot.com",
            messagingSenderId: "1059138630845"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <Text>An app</Text>
            </View>
        );
    }
}

export default App;
