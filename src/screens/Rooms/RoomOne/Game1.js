import React, {} from 'react'
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List1 from './List1';
import List2 from './List2';

const Tab = createBottomTabNavigator();

const SquadA =({navigation})=> {
    return (
    <View style={styles.RoomOneContainer}>
        <View style={styles.PUBGIconContainer}>
            <Image style={styles.Imagecircle}
            source={require('../../../../assets/images/pubgm.jpg')} />
        </View>

        <View style={styles.TitleContainer}>
            <Text style={styles.PUBGTitle}>Room : 1</Text>
        </View>

        <ScrollView
        showsVerticalScrollIndicator={false}
        >
            <View>
                <List1/>  
            </View>
            <View>
                <List2/>  
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


export default SquadA;