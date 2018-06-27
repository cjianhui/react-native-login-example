import React, {Component} from 'react';
import { Button, CardSection } from './common';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

class Home extends Component {

    handleButtonPress() {
        this.props.signoutUser();
    };

    render() {
        return (
            <CardSection>
                <Button onPress={this.handleButtonPress.bind(this)}>
                    Log Out
                </Button>
            </CardSection>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { error } = auth;

    return { error };
};

const mapDispatchToProps = {
    signoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
