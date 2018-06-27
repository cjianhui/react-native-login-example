import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

const Home = () => {
    return (
        <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
                Log Out
            </Button>
        </CardSection>
    );
};

export default Home;
