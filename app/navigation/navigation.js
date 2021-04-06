import MyTabs from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const {default: SplashScreen} = require('../screens/SplashScreen');

const navigation = [
  {
    name: 'Splash',
    component: SplashScreen,
  },
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Register',
    component: RegisterScreen,
  },
  {
    name: 'App',
    component: MyTabs,
  },
];

export default navigation;
