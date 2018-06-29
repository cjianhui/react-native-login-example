import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from '../components/LoginForm';
import Signup from '../components/SignupForm';
import Home from '../components/Home';
import AuthLoadingScreen from '../components/AuthLoadingScreen';

export const navigationRouteKeys = {
  Login: 'Login',
  Signup: 'Signup',
  Home: 'Home'
};

const authRouteConfig = {
  [`${navigationRouteKeys.Login}`]: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  [`${navigationRouteKeys.Signup}`]: {
    screen: Signup,
    navigationOptions: {
      title: 'Signup'
    }
  }
};


const authNavigationConfig = {
  initialRouteName: `${navigationRouteKeys.Login}`,
  mode: 'modal'
};

const appRouteConfig = {
    [`${navigationRouteKeys.Home}`]: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    }
};

const AppStack = createStackNavigator(appRouteConfig);
const AuthStack = createStackNavigator(authRouteConfig, authNavigationConfig);

export const Navigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);


