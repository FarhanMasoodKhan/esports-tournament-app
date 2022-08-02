import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const AwardScreen = ()  =>{
    
  return (
    <View style={styles.MainContainer}>
    <Text style={styles.Heading}>Award Screen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    MainContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
    },
    Heading:{
        color: 'white',
        fontSize: 30,
    }
})


export default AwardScreen;