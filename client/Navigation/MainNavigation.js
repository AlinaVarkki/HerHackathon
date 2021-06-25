import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import MainScreen from "../views/FeedScreen.js";



const Stack = createStackNavigator();

const MainNavigation = () => (

    <NavigationContainer>
         <Stack.Navigator initialRouteName="MainScreen" screenOptions={{headerShown: false}}>

             <Stack.Screen name="MainScreen" component={MainScreen}/>


         </Stack.Navigator>
    </NavigationContainer>
)


export default MainNavigation;
