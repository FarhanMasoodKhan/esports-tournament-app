/*
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from './src/screens/homeScreen';
import homeScreen from './src/screens/homeScreen';
import homeScreen from './src/screens/homeScreen';
import { NavigationContainer, StackActions} from '@react-navigation/native';


 /*
          StackNav.js +  App.js

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
---------------------------------------------------
                    App.js

const App =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

----------------------------------------------------

                        HomeScreen.js

const HomeScreen = ({navigation})  =>{
    
  return (
     <View style={styles.HomeScreenView}>
      <Text>Home Screen</Text>
      <Button 
      onPress={()=> navigation.navigate('Awards')} 
        title="Go to Awards"/>
     </View>
  );
};
------------------------------------------------------


const BottomIcons = props => {
  return <Ionicons name={props.name} size={25}/>;
};


*/ 
 // --------------------------------------------

 /*  on Press */

  /*      <Button
          title="Open Test Screen" />,
        onPress = {() => {
          Navigation.navigate("Home");
        } }
      </View>
</>



export default Test;
*/