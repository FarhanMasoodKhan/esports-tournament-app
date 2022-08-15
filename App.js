import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from './src/screens/Home/homescreen';
import AwardScreen from './src/screens/Award/awardscreen';
import StatScreen from './src/screens/Stat/statscreen';
import SquadA from './src/screens/Rooms/RoomOne/Game1';
import SquadB from './src/screens/Rooms/RoomTwo/Game1';
import List1 from './src/screens/Rooms/RoomOne/List1';
import { NativeStackView } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




const App =()=> {
  return (    

    <NavigationContainer>
  <Tab.Navigator
   initialRouteName='Home'  // --->  'Home'
    screenOptions={{ 
      tabBarStyle: { backgroundColor: '#FF5412', height: '50px'},
      tabBarLabelStyle : { color: '#FFFFFF', fontSize:15, fontWeight  : 'bold', fontFamily: 'Roboto'},
      tabBarIconStyle : { color:  '#FFFFFF'},
      }}>
      
      {/* Just for Room Screen */}
    {/* <Tab.Screen name="Game2" component={SquadB}
      options={{ 
        tabBarIcon: () => <BottomIcons name="trophy" />,
        headerTintColor: 'white',
        title: '',
        headerStyle: {backgroundColor: '#FF5412',} 
        }}
        /> */}
      {/* -------------------------------------- */}

      <Tab.Screen name="Tournaments" component={AwardScreen}
        options={{
          tabBarIcon: () => <BottomIcons 
          name="game-controller" />,
          tabBarLabel: 'Tournaments',
          title: 'Tournaments', 
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#FF5412'}
          }} />


      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarIcon: () => <BottomIcons name="home" />,
          tabBarLabel: 'DashBoard',
          }}/>


      <Tab.Screen name="Stats" component={StatScreen} 
        options={{
          tabBarIcon: () => <BottomIcons name="stats-chart" />,
          tabBarLabel: 'Stats',
          title: 'Stats', 
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#FF5412'}
          }}/>

          
      {/* <Tab.Screen name="Game1" component={SquadA}/> */}

    </Tab.Navigator>
    </NavigationContainer>
    
  );
};

const BottomIcons = props => {
  return <Ionicons 
  name={props.name}
  size={25}
  />;
};


export default App;

/*           

          
*/