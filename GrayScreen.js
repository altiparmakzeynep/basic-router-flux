import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Actions } from 'react-native-router-flux';


const GrayScreen = () =>{
  return(
    <View style={styles.container}>
      <Text style={styles.grayText}
      onPress={()=> Actions.pink()}>
          GRAY SCREEN
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"gray",
  },
  grayText:{
    textAlign:"center",
    fontSize:20,
    margin:10
   
  }
  
});

export default GrayScreen;