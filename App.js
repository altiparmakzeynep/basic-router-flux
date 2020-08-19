import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Router,Scene} from 'react-native-router-flux';

import GrayScreen from './GrayScreen';
import OrangeScreen from './OrangeScreen';
import BlackScreen from './BlackScreen';
import PinkScreen from './PinkScreen';


const App = () =>{
  return(
    <Router>
      <Scene key="root">
        <Scene key="orange"
               component={OrangeScreen}
               title="Orange Screen"
              >
        </Scene>
        <Scene key="gray"
               component={GrayScreen}
               title="Gray Screen">
        </Scene>
        <Scene key="black"
               component={BlackScreen}
               title="Black Screen">
        </Scene>
        <Scene key="pink"
               component={PinkScreen}
               title="Pink Screen">
        </Scene>
      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"pink",
  },
  welcome:{
    textAlign:"center",
    fontSize:20,
    margin:10,
    fontWeight:"bold"
   
  }
  
});

export default App;