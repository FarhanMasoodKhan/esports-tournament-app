import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const StatScreen = ({navigation})  =>{
    
  return (
    <View style={styles.HomeScreenView}>
    <Text>Stat Screen</Text>
    <Button 
    onPress={()=> navigation.navigate('Home')} 
      title="Go to Home"/>
   </View>
  )
}


const styles = StyleSheet.create({

})


export default StatScreen;