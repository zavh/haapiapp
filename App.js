import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import ProfileScreen from './screens/ProfileScreen';
import MonitorScreen from './screens/MonitorScreen';
import HomeScreen from './screens/HomeScreen'
import { Provider } from "react-redux";
import store from "./redux/store/index";

const MonitorStack = createStackNavigator(
  {
    Monitor: MonitorScreen
  },
  {
    defaultNavigationOptions: {
      title:'Meter Monitoring',
      headerStyle: {
        backgroundColor: 'powderblue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Meter Monitor',
    },
  }
);
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: {
      title:'My Profile',
      headerStyle: {
        backgroundColor: 'powderblue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  }
);
const AuthStack = createStackNavigator({ SignIn: HomeScreen });
const AppStack = createBottomTabNavigator({ MonitorStack, ProfileStack });

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Auth"
    }
  )
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
