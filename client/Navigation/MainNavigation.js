import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import FeedScreen from "../views/FeedScreen";
import TeamScreen from "../views/TeamScreen";
import CompanyScreen from "../views/CompanyScreen";
import DiscoverScreen from "../views/DiscoverScreen";
import ProfilePageScreen from "../views/ProfilePageScreen";
import MainScreen from "../views/MainScreen";



const Stack = createStackNavigator();

const MainNavigation = () => (

    <NavigationContainer>
         <Stack.Navigator initialRouteName="MainScreen" screenOptions={{headerShown: false}}>
             {/*<Stack.Screen name="FeedScreen" component={FeedScreen}/>*/}
             {/*<Stack.Screen name="TeamScreen" component={TeamScreen}/>*/}
             {/*<Stack.Screen name="CompanyScreen" component={CompanyScreen}/>*/}
             {/*<Stack.Screen name="DiscoverScreen" component={DiscoverScreen}/>*/}
             {/*<Stack.Screen name="ProfilePageScreen" component={ProfilePageScreen}/>*/}
             <Stack.Screen name="MainScreen" component={MainScreen}/>


         </Stack.Navigator>
    </NavigationContainer>
)


export default MainNavigation;
