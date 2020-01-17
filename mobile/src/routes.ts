import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

import { primaryColor } from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'DevRadar',
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: 'Github Profile',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: primaryColor.text,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: primaryColor.bg,
        },
      },
    }
  )
);

export default Routes;
