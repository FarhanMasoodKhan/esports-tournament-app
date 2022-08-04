import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator();


const RoomOne =( )=> {

    return (
    <View style={styles.RoomOneContainer}>
        <View style={styles.PUBGIconContainer}>
            <Text style={styles.Text}>Icon</Text>
        </View>

        <View style={styles.PUBGIconContainer}>
            <Text style={styles.Text}>Squad one</Text>
        </View>

        <View style={styles.PUBGIconContainer}>
            <Text style={styles.Text}>Squad Two</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    RoomOneContainer: {  
        flex: 1,
        backgroundColor:'black',
        color:  '#FFFFFF',
        alignItems: 'center',
    },
    Text:{
        color: '#FFFFFF',
    },

});


export default RoomOne;