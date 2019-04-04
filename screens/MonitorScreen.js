import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableHighlight, Switch, FlatList, Picker} from 'react-native';
import RNEventSource from '../components/ServerSideEventGrabber';
import { connect } from "react-redux";

const screenWidth = Math.round(Dimensions.get('window').width);
const wwidth = Math.round(screenWidth);
const widget = {
  width: wwidth,
  backgroundColor : 'white',
  borderRadius: 10,
}

function mapStateToProps (state)
{
  return { session: state.session };
}

class ConnectedMonitorScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      language: 'JavaScript'
    }
  }
  render() {
    const shadowStyle={
      shadowOpacity:0.5,
      shadowOffset:{height:2, width:2},
    }

     return (
       <View style={{flex: 1}}>

         <View style={{flex: 1, flexDirection: 'column', padding:10, backgroundColor:'powderblue', justifyContent:'space-between'}}>
           <View style={{borderBottomColor: 'black', borderBottomWidth:0.5,}}>
             <Text>Voltage</Text>
           </View>
           <View style={{borderBottomColor: 'black', borderBottomWidth:0.5,}}>
             <Text>Current</Text>
           </View>
           <View style={{borderBottomColor: 'black', borderBottomWidth:0.5,}}>
             <Text>Temperature</Text>
           </View>
           <View style={{borderBottomColor: 'black', borderBottomWidth:0.5,}}>
             <Text>Power</Text>
           </View>
         </View>
         <View style={{flex:1}}>
                     <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>

         </View>
         <View style={{flex: 2, flexDirection: 'row', padding:10, justifyContent: 'space-between',}}>
           <View>
             <Text>Switch 1</Text><Switch value='false'></Switch>
           </View>
           <View>
             <Text>Switch 2</Text><Switch value='true'></Switch>
           </View>
           <View>
             <Text>Switch 3</Text><Switch value='true'></Switch>
           </View>
           <View>
             <Text>Switch 4</Text><Switch value='true'></Switch>
           </View>
         </View>
   </View>
     );
   }
}
const MonitorScreen = connect(mapStateToProps)(ConnectedMonitorScreen);
export default MonitorScreen;

const styles = StyleSheet.create({
  cast: {
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  widgetTop:{
    height: 20,
    alignItems: 'center',
    borderBottomColor: 'powderblue',
    borderBottomWidth:0.3,
  },
  widgetHeader:{
    fontWeight:'bold',
    color: 'skyblue'
  }
})
