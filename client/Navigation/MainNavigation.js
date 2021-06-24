import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation'



const Stack = createStackNavigator();

const MainNavigation = () => (
    <NavigationContainer>
         <Stack.Navigator initialRouteName="initial animation" screenOptions={{headerShown: false}}>
             <Stack.Screen name="log in" component={}/>
             <Stack.Screen name="possibly register?" component={}/>
             <Stack.Screen name="DrawerNavigation" component={DrawerNavigation}/>
             <Stack.Screen name="profile" component={}/>

         </Stack.Navigator>
    </NavigationContainer>
)


export default MainNavigation;
