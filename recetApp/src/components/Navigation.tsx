import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import AddReceta from '../screen/AddReceta';
import { NavigationContainer } from '@react-navigation/native';
import ListReceta from '../screen/ListReceta';

const tab = createBottomTabNavigator();
const tabHome = createNativeStackNavigator();

function MyStack() {
    return(
        <tabHome.Navigator initialRouteName='Home'>
           <tabHome.Screen name='Home' component={Home}/>
           <tabHome.Screen name='AddRecipe' component={AddReceta} />
           <tabHome.Screen name='ListRecipe' component={ListReceta} />
        </tabHome.Navigator>
    )
}

const Navigation = () => {
  return (
  <NavigationContainer>
       <tab.Navigator initialRouteName='Home'>
        <tab.Screen name='Home' component={Home} />
        <tab.Screen name='AddRecipe' component={AddReceta} />  
        <tab.Screen name='ListRecipe' component={ListReceta} />
       </tab.Navigator> 
  </NavigationContainer>
  )
}

export default Navigation