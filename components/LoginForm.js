import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { connect } from "react-redux";
import { addSession } from "../redux/actions/index";
import axios from 'axios';

function mapDispatchToProps(dispatch) {
  return {
    addSession: session => dispatch(addSession(session))
  };
}

class ConnectedForm extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    let formData = {};
    formData['email'] = this.state.username;
    formData['password'] = this.state.password;
    axios
    .post("http://localhost:8000/api/user/login/", formData)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        let session = {
          name: json.data.data.name,
          id: json.data.data.id,
          email: json.data.data.email,
          auth_token: json.data.data.auth_token,
          timestamp: new Date().toString(),
          isLoggedIn: true,
        };
        let appState = {
          isLoggedIn: true,
          user: session
        };
        this.props.addSession(session);
        this.props.bridge();
      }
      else alert("Login Failed!");
    });
  }

  render() {
      return (
          <View style={styles.container}>
              <TextInput
                style={{height: 40, width:200, borderBottomColor: 'red', borderBottomWidth: 1}}
                placeholder="Username"
                onChangeText={(username) => this.setState({username})}
                spellCheck={false}
                />
              <TextInput
                  style={{height: 40, width:200, borderBottomColor: 'red', borderBottomWidth: 1}}
                  placeholder="Password"
                  onChangeText={(password) => this.setState({password})}
                  secureTextEntry={true}
                  />
              <Button
                onPress={this.handleSubmit}
                title="Submit"
                color="#841584"
              />
          </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  head: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    padding: 10,

    backgroundColor: '#EEEEEE',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
const LoginForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default LoginForm;
