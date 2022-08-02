// import React from 'react'
// import { View, Text, Image, StyleSheet } from 'react-native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../../screens/homescreen';
// import AwardScreen from '../../screens/awardscreen';
// import StatScreen from '../../screens/statscreen';
// import Ionicons from "react-native-vector-icons/Ionicons";

// const Tab = createBottomTabNavigator();


// const BottomTabs = () => {
//   return (
//     <Tab.Navigator
//     screenOptions={{ 
//       tabBarStyle: { backgroundColor: '#FF5412', height: '50px'},
//       tabBarLabelStyle : { color: '#FFFFFF', fontSize:15, fontWeight  : 'bold', fontFamily: 'Roboto'},
//       tabBarIconStyle : { color:  '#FFFFFF'},
//       }}>

      
//       <Tab.Screen name="Awards" component={AwardScreen}
//         options={{
//           tabBarIcon: () => <BottomIcons name="trophy" />,
//           tabBarLabel: 'Awards',
//           title: 'Awards', 
//           headerTintColor: 'white',
//           headerStyle: {backgroundColor: '#FF5412'}
//           }} />


//       <Tab.Screen name="Home" component={HomeScreen} 
//         options={{
//           tabBarIcon: () => <BottomIcons name="home" />,
//           tabBarLabel: 'DashBoard',
//           title: 'DashBoard', 
//           headerTintColor: 'white',
//           headerStyle: {backgroundColor: '#FF5412'},
//           }}/>


//       <Tab.Screen name="Stats" component={StatScreen} 
//         options={{
//           tabBarIcon: () => <BottomIcons name="stats-chart" />,
//           tabBarLabel: 'Stats',
//           title: 'Stats', 
//           headerTintColor: 'white',
//           headerStyle: {backgroundColor: '#FF5412'}
//           }}
//       />
//     </Tab.Navigator>
//   );
// }

// const BottomIcons = props => {
//   return <Ionicons 
//   name={props.name}
//   size={25}
//   />;
// };
// export default BottomTabs;