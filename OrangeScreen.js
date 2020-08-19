import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Actions } from 'react-native-router-flux';


const OrangeScreen = () =>{
  return(
    <View style={styles.container}>
      <Text style={styles.orangeText}
             onPress={()=> Actions.gray()}>
          ORANGE SCREEN
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"orange",
  },
  orangeText:{
    textAlign:"center",
    fontSize:20,
    margin:10
   
  }
  
});

export default OrangeScreen;