import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import MonitorScreen from './MonitorScreen';
import ProfileScreen from './ProfileScreen';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class MainScreen extends Component{
  render() {
     return <AppContainer />;
   }
}

const AppStackNavigator = createDrawerNavigator(
  {
    Home: MonitorScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
