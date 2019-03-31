import React, { Component } from 'react';
import { View, Text } from 'react-native';

import RNEventSource from 'react-native-event-source';

export default class SSE extends Component {
  constructor(props){
      super(props);
      this.state ={
        data:{},}
  }
  componentDidMount() {
    console.log(this.props.token);
    this.eventSource = new RNEventSource(`http://localhost:8000/api/sse?token=${this.props.token}`);

    // Grab all events with the type of 'message'
    this.eventSource.addEventListener('message', (data) => {
      let server_time = JSON.parse(data.data);
      console.log(server_time);
      this.setState({data :server_time});
    });
  }
  componentWillUnmount() {
    this.eventSource.removeAllListeners();
    this.eventSource.close();
  }
  render() {
    return (
      <View>
        <Text>{this.state.data.data}</Text>
      </View>
    )
  }
}
