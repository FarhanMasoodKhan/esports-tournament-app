import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './src/screens/homescreen';
import AwardScreen from './src/screens/awardscreen';
import StatScreen from './src/screens/statscreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'>

  <Stack.Screen name="Awards" component={AwardScreen}
      options={{headerShown: true, 
      headerTintColor: 'white',    
      headerStyle: {
      backgroundColor: '#FF5412'}
      }}
        />

        
<Stack.Screen name="Home" component={HomeScreen}
      options={{headerShown: true, 
      title: 'DashBoard',
      headerTintColor: 'white',    
      headerStyle: {
      backgroundColor: '#FF5412'}
      }}
        />
      
<Stack.Screen name="Stats" component={StatScreen}
      options={{headerShown: true, 
      headerTintColor: 'white',    
      headerStyle: {
      backgroundColor: '#FF5412'}
      }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/*           

          
*/