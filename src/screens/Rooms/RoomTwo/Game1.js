import React, {useRef, useState} from 'react'
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List3 from './List3';
import List4 from './List4';

const Tab = createBottomTabNavigator();

const SquadB =( )=> {
    return (
    <View style={styles.RoomOneContainer}>
        <View style={styles.PUBGIconContainer}>
            <Image style={styles.Imagecircle}
            source={require('../../../../assets/images/pubgm.jpg')} />
        </View>

        <View style={styles.TitleContainer}>
            <Text style={styles.PUBGTitle}>Room : 2</Text>
        </View>

        <ScrollView
        showsVerticalScrollIndicator={false}
        >
            <View>
                <List3/>  
            </View>
            <View>
                <List4/>  
            </View>
        </ScrollView>

    </View>
    
  )
}


const styles = StyleSheet.create({

    RoomOneContainer: {  
        flex: 1,
        backgroundColor:'black',
        color:  '#FFFFFF',
        paddingHorizontal: 30,
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

});


export default SquadB;