import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Actions } from 'react-native-router-flux';


const BlackScreen = () =>{
  return(
    <View style={styles.container}>
      <Text style={styles.blackText}
             onPress={()=> Actions.pink()}>
          BLACK SCREEN
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black",
  },
  blackText:{
    textAlign:"center",
    fontSize:20,
    margin:10,
    color:"white"
   
  }
  
});

export default BlackScreen;