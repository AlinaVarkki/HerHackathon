import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation'
import ProfileScreen from '../views/ProfilePageScreen'
import SubmissionScreen from '../views/SubmissionScreen'



const Stack = createStackNavigator();

const MainNavigation = () => (
    <NavigationContainer>
         <Stack.Navigator initialRouteName="log in" screenOptions={{headerShown: false}}>
             <Stack.Screen name="LogInScreen" component={}/>
             <Stack.Screen name="possibly register?" component={}/>
             <Stack.Screen name="DrawerNavigation" component={DrawerNavigation}/>
             <Stack.Screen name="Profile" component={ProfileScreen}/>
             <Stack.Screen name="SubmissionScreen" component={SubmissionScreen}/>

         </Stack.Navigator>
    </NavigationContainer>
)


export default MainNavigation;
