import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Actions } from 'react-native-router-flux';


const PinkScreen = () =>{
  return(
    <View style={styles.container}>
      <Text style={styles.pinkText}
             onPress={()=> Actions.black()}>
          PINK SCREEN
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"pink",
  },
  pinkText:{
    textAlign:"center",
    fontSize:20,
    margin:10
   
  }
  
});

export default PinkScreen;