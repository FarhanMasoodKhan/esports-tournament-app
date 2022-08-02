import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const HomeScreen = ({navigation})  =>{
    
  return (
     <View style={styles.HomeScreenView}>
      <Text>Home Screen</Text>
      <Button 
      onPress={()=> navigation.navigate('Awards')} 
        title="Go to Awards"/>
     </View>
  );
};

const styles = StyleSheet.create({
   HomeScreenView:{
        flex: 1,
        backgroundColor: 'yellow',
    },
    text:{
        color: 'blue',
        fontSize: 30,
    }
})


export default HomeScreen;