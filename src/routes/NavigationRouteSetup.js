import { StackNavigator } from 'react-navigation';
import Login from '../components/LoginForm';
import Signup from '../components/SignupForm';

export const navigationRouteKeys = {
    Login: 'Login',
    Signup: 'Signup'
};

const navigationStackRouteConfig = {
    [`${navigationRouteKeys.Login}`]: {
        screen: Login
    },
    [`${navigationRouteKeys.Signup}`]: {
        screen: Signup
    }
};

const navigationConfig = {
    initialRouteName: `${navigationRouteKeys.Login}`,
    mode: 'card',
    headerMode: 'screen'
};

export const Navigator = StackNavigator(navigationStackRouteConfig, navigationConfig);

