import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";


const SquadB = ()=> {
        return (
            <View style={styles.RoomOneContainer}>
                <View style={styles.PUBGIconContainer}>
                    <Image style={styles.Imagecircle}
                    source={require('../../../../assets/images/pubgm.jpg')} />
                </View>
        
                <View style={styles.TitleContainer}>
                    <Text style={styles.PUBGTitle}>Room : 2</Text>
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

    container: {  
        flex: 1,
        backgroundColor:'#FF5412',
        color:  '#FFFFFF',
    },
});


export default SquadB;