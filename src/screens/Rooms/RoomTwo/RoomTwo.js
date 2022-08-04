import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";


const RoomTwo = ()=> {

    return (
    <View>
        <Text>Room 2</Text>
    </View>
  )
}

const style = StyleSheet.create({

    container: {  
        flex: 1,
        backgroundColor:'#FF5412',
        color:  '#FFFFFF',
    },
});


export default RoomTwo;