import React from 'react';
import {Dimensions, StyleSheet, View, FlatList} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import SquareLeaderboardBoi from "./SquareLeaderboardBoi";
import StoriesBubble from "./StoriesBubble";
import NewStoryAdder from "./NewStoryAdder";
import Treat from "./Treat";

const Treats = () => {

    const treats = [
        {
            id: 1,
            title: "Zero-waste lunch",
            category: "NUTRITION",
            points: 500,
        },{
            id: 2,
            title: "Zero-waste lunch",
            category: "NUTRITION",
            points: 500,
        },{
            id: 3,
            title: "Zero-waste lunch",
            category: "NUTRITION",
            points: 500,
        },{
            id: 4,
            title: "Zero-waste lunch",
            category: "NUTRITION",
            points: 500,
        },

    ];

    const renderTreat = ({item}) => (
        <Treat category={item.category} title={item.title} points={item.points}/>

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