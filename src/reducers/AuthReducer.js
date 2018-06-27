import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    TOGGLE_LOGIN_STATUS
} from '../actions/ActionTypes';

const defaultState = {
    email: '',
    password: '',
    user: null,
    error: '',
    loggedIn: null,
    loading: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...defaultState, user: action.payload, loggedIn: action.loggedIn };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        case SIGNUP_USER:
            return { ...state, loading: true, error: '' };
        case SIGNUP_USER_SUCCESS:
            return { ...state, ...defaultState, user: action.payload, loggedIn: action.loggedIn };
        case SIGNUP_USER_FAIL:
            return { ...state, error: 'Email is in use.', password: '', loading: false };
        case TOGGLE_LOGIN_STATUS:
            return { ...state, loggedIn: action.loggedIn };
        default:
            return state;
    }
};
