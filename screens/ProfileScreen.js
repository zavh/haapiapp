import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import { connect } from "react-redux";

function mapStateToProps (state)
{
  return { session: state.session };
}

class ConnectedProfileScreen extends Component{
  constructor(props){
    super(props);
  }
  render() {
    const data = [
      {key:'Name',value:this.props.session.name},
      {key:'Email',value:this.props.session.email}
    ];
     return (
      <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({item}) => <View style={styles.item}><Text>{item.key} : {item.value}</Text></View>}
          />
      </View>
     );
   }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
  },
})

const ProfileScreen = connect(mapStateToProps)(ConnectedProfileScreen);
export default ProfileScreen;
