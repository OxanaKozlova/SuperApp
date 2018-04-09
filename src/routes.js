import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './screens/HomeScreen';
import Film from './screens/FilmScreen';

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Film List',
      },
    },
    Film: {
      screen: Film,
      navigationOptions: {
        headerTitle: 'Film',
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
