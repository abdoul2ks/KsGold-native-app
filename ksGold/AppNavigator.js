import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './View/Home';
import StartPage from './View/StartPage';

const AppNavigator = createStackNavigator({
  Welcome: { screen: StartPage },
  Home: { screen: HomePage}
});

export default createAppContainer(AppNavigator);