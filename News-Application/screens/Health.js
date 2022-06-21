import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from "react-native";
// // import All from '../screens/All';
// import Business from '../screens/Business';
// import HealthScreen from '../screens/Health';
// import SportsScreen from '../screens/Sports';
// import TechScreen from '../screens/Tech';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="All" component={All} />
    //     <Tab.Screen name="Business" component={Business} />
    //     <Tab.Screen name="Health" component={HealthScreen} />
    //     <Tab.Screen name="Sports" component={SportsScreen} />
    //     <Tab.Screen name="Tech" component={TechScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <View><Text>Health</Text></View>
  );
} 