import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableHighlight} from 'react-native';
import RNEventSource from '../components/ServerSideEventGrabber';
import { connect } from "react-redux";

const screenWidth = Math.round(Dimensions.get('window').width);
const wwidth = Math.round(screenWidth * 43/100);
const wheight = Math.round(screenWidth * 43/100);
const widget = {
  width: wwidth,
  height: wheight,
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
  }
  render() {
    const shadowStyle={
      shadowOpacity:0.5,
      shadowOffset:{height:2, width:2},
    }

     return (
       <View style={{flex: 1}}>
         <View style={{flex: 2, flexDirection: 'column', justifyContent: 'space-between', padding:10}}>
           <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding:5}}>
             <View style={[widget, shadowStyle]}>
               <View style={styles.widgetTop}>
               <Text style={styles.widgetHeader}>Voltage</Text>
               </View>
             </View>
             <View style={[widget, shadowStyle]}>
               <View style={styles.widgetTop}>
               <Text style={styles.widgetHeader}>Current</Text>
               </View>
             </View>
           </View>
           <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding:5}}>
             <View style={[widget, shadowStyle]}>
               <View style={styles.widgetTop}>
               <Text style={styles.widgetHeader}>Temperature</Text>
               </View>
             </View>
             <View style={[widget, shadowStyle]}>
               <View style={styles.widgetTop}>
               <Text style={styles.widgetHeader}>Power</Text>
               </View>
             </View>
           </View>
       </View>
       <View style={{flex: 1, padding:10}}>
         <RNEventSource token={this.props.session.auth_token}/>
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
