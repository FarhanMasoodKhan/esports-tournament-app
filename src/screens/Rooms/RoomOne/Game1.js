import React, {useRef, useState} from 'react'
import { View, Text, StyleSheet, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List1 from './List1';

const Tab = createBottomTabNavigator();

const SquadA =( )=> {
    return (
    <View style={styles.RoomOneContainer}>
        <View style={styles.PUBGIconContainer}>
            <Image style={styles.Imagecircle}
            source={require('../../../../assets/images/pubgm.jpg')} />
        </View>

        <View style={styles.TitleContainer}>
            <Text style={styles.PUBGTitle}>Room : 1</Text>
        </View>
      
        <List1/>
        <View style={styles.PUBGList1}>
            <Text>List 1</Text>
          
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
    PUBGIconContainer: {
        alignItems: 'center',
    },
    Imagecircle: {
        height: 80,
        width: 80,
        borderRadius: 100,
    },
    TitleContainer:{
        alignItems: 'center',
        paddingTop: 10,
    },
     PUBGTitle:{
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
     },
     PUBGList1:{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
     }

});


export default SquadA;