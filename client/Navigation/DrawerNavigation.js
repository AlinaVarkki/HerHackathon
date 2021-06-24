import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    return (
        <Drawer.Navigator
            initialRouteName="Feed" drawerType='back'
                          // design from 317, to be changed but wanted to copy over the structure
                          // drawerStyle={{width: '55%',
                          //                   backgroundColor: ColourPalette.darkBlue,
                          //               paddingTop: '10%',
                          // }}
                          // drawerContentOptions={{
                          //     activeTintColor: ColourPalette.darkBlue,
                          //     activeBackgroundColor: ColourPalette.yellow,
                          //     inactiveTintColor: ColourPalette.white,
                          //     itemStyle: {
                          //     },
                          //     labelStyle:{
                          //         marginLeft:5,
                          //         padding: 2.5,
                          //         fontSize: 17.5,
                          //     }}}
        >
            <Drawer.Screen name="" component={}/>
        </Drawer.Navigator>
    )

}

export default DrawerNavigation;
