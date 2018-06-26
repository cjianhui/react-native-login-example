import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

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
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return (
                    <Spinner size="large"/>
                );
        }
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
