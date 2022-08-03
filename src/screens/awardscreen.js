import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const AwardScreen = ({navigation})  =>{
    
  return (
    <View style={styles.HomeScreenView}>
    <Text>Awards Screen</Text>
    <Button 
    onPress={()=> navigation.navigate('Stats')} 
      title="Go to Stats"/>
   </View>
  )
}


const styles = StyleSheet.create({
   
})


export default AwardScreen;