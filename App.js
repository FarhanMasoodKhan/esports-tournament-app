import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from './src/screens/homescreen';
import AwardScreen from './src/screens/awardscreen';
import StatScreen from './src/screens/statscreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigator = () =>{
  return (
    <TabNavigator 
        screenOptions={{ 
      tabBarStyle: { backgroundColor: '#FF5412', height: '50px'},
      tabBarLabelStyle : { color: '#FFFFFF', fontSize:15, fontWeight  : 'bold', fontFamily: 'Roboto'},
      tabBarIconStyle : { color:  '#FFFFFF'},
        }}>



          
      <Tab.Screen name="Awards" component={AwardScreen}
        options={{
          tabBarIcon: () => <BottomIcons name="trophy" />,
          tabBarLabel: 'Awards',
          title: 'Awards', 
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#FF5412'}
          }} />


      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarIcon: () => <BottomIcons name="home" />,
          tabBarLabel: 'DashBoard',
          title: 'DashBoard', 
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#FF5412'},
          }}/>


      <Tab.Screen name="Stats" component={StatScreen} 
        options={{
          tabBarIcon: () => <BottomIcons name="stats-chart" />,
          tabBarLabel: 'Stats',
          title: 'Stats', 
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#FF5412'}
          }}
      />

    </TabNavigator>
  )
}


const App =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const BottomIcons = props => {
  return <Ionicons name={props.name} size={25}/>;
};

export default App;

/*           

options={{headerShown: true, headerTintColor: 'white',    
          headerStyle: {
          backgroundColor: '#FF5412'}
          }} 
          
*/