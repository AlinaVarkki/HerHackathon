import React, {Component} from 'react';
import ScrollingButtonMenu from 'react-native-scroll-menu';
import { View } from 'react-native';
import ColorPalette from "../Assets/ColorPalette";

export default class HorizontalMenu extends Component {


    render() {
        let i = 1;
        return (
            <ScrollingButtonMenu
                items={[
                    {
                        id: 1,
                        name: 'Approved',
                    },
                    {
                        id: 2,
                        name: 'Fitness',
                    },
                    {
                        id: 3,
                        name: 'Recycling',
                    },
                    {
                        id: 4,
                        name: 'Zero Waste',

                    },
                    {
                        id: 5,
                        name: 'Volunteer',
                    },
                ]}
                onPress={(e) => {
                    console.log(e.id);
                    i = e.id
                }}
                selected={i}
                activeColor={ColorPalette.darkOrange}
                activeBackgroundColor={ColorPalette.lightYellow}
                upperCase={true}
            />
        );
    }
}

