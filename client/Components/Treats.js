import React from 'react';
import {Dimensions, StyleSheet, View, FlatList} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import SquareLeaderboardBoi from "./SquareLeaderboardBoi";
import StoriesBubble from "./StoriesBubble";
import NewStoryAdder from "./NewStoryAdder";
import Treat from "./Treat";

const Treats = () => {

    const backgrounds = [
        require('../Assets/SquareBoiis/Boi1.png'),
        require('../Assets/SquareBoiis/Boi2.png'),
        require('../Assets/SquareBoiis/Boi4.png'),
        require('../Assets/SquareBoiis/Boi5.png'),
        require('../Assets/SquareBoiis/Boi6.png'),
        require('../Assets/SquareBoiis/Boi7.png')
    ]

    const treats = [
        {
            id: '1',
            title: "Zero-waste lunch",
            category: "NUTRITION",
            points: 500,
        },{
            id: '2',
            title: "A collection of reusable containers",
            category: "ZERO-WASTE",
            points: 750,
        },{
            id: '3',
            title: "1 year paid bike sharing subscription",
            category: "FITNESS",
            points: 1000,
        },{
            id: '4',
            title: "Free courses of your choice",
            category: "GROWTH",
            points: 2500,
        },
        {
            id: '5',
            title: "Green conference tickets",
            category: "GROWTH",
            points: 7500,
        },
        {
            id: '6',
            title: "A day off",
            category: "PERSONAL",
            points: 15000,
        },

    ];

    const renderTreat = ({item}) => (
        <Treat category={item.category} title={item.title} points={item.points} photo={backgrounds[Math.floor(Math.random() * backgrounds.length)]}/>

    );

    return (
        <View style={styles.container}>

            <FlatList
                data={treats}
                renderItem={renderTreat}
                keyExtractor={item => item.id}
                horizontal={true}

            />


        </View>

    );

}

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',

    },

});

export default Treats;
