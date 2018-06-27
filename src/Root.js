import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import LoginApp from './LoginApp';

const store = createStore(rootReducer);

class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <LoginApp />
            </Provider>
        );
    }
}

export default Root;
