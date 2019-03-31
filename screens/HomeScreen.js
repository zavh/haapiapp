import React, {Component} from 'react';
import { connect } from "react-redux";
import LoginForm from '../components/LoginForm';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import MainScreen from './MainScreen';

function mapStateToProps (state)
{
  return { session: state.session };
}

class ConnectedHomeScreen extends Component {
  static navigationOptions = {
    title: 'Login to Home Automation',
  };
  constructor(props){
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(){
    this.props.navigation.navigate('App');
  }

  render() {
    if(typeof this.props.session.isLoggedIn !== 'undefined'){
      return(
        <View>
          <Text>Login Successful</Text>
        </View>
      );
    }
    else {
      return (
          <LoginForm bridge={this.buttonClick}/>
      );
    }
  }
}
const HomeScreen = connect(mapStateToProps)(ConnectedHomeScreen);
export default HomeScreen;
