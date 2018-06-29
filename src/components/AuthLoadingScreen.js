import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
    StyleSheet
} from 'react-native';
import firebase from "firebase";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class AuthLoadingScreen extends React.Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBViovda0qH0HqQPTL8gwtRIsGlMwonFS4',
            authDomain: 'login-bdf86.firebaseapp.com',
            databaseURL: 'https://login-bdf86.firebaseio.com',
            projectId: 'login-bdf86',
            storageBucket: 'login-bdf86.appspot.com',
            messagingSenderId: '1059138630845'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('App');
            } else {
                this.props.navigation.navigate('Auth');
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default AuthLoadingScreen;

