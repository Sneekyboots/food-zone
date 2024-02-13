import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}