import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import MainScreen from "../views/MainScreen";
import StoriesSlides from "../views/StoriesSlides";
import LoginScreen from "../views/LogInScreen";



const Stack = createStackNavigator();

const MainNavigation = () => (

    <NavigationContainer>
         <Stack.Navigator initialRouteName="MainScreen" screenOptions={{headerShown: false}}>
             <Stack.Screen name="LoginScreen" component={LoginScreen}/>

             <Stack.Screen name="MainScreen" component={MainScreen}/>
             <Stack.Screen name="StoriesSlides" component={StoriesSlides}/>


         </Stack.Navigator>
    </NavigationContainer>
)


export default MainNavigation;
