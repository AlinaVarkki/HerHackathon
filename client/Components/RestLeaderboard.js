import React from 'react';
import {StyleSheet, View} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import SquareLeaderboardBoi from "./SquareLeaderboardBoi";
import RectangularLeaderboard from "./RectangularLeaderboard";


const RestLeaderboard = () => {
    const teams = [
        {
            name: "Club Penguin",
            position: "4",
            photo: require('../Assets/Teams/Artboard17-1.png'),
            points: "1001",
        },{
            name: "Cool boiz",
            position: "5",
            photo: require('../Assets/Teams/Artboard20-1.png'),
            points: "999",
        }
    ]

    return (
        <View>
            <RectangularLeaderboard title={teams[0].position} photoURL={teams[0].photo} teamName={teams[0].name} points={teams[0].points} color={ColorPalette.green}/>

            <RectangularLeaderboard title={teams[1].position} photoURL={teams[1].photo} teamName={teams[1].name} points={teams[1].points} color={ColorPalette.orange}/>


        </View>
    );

}

const styles = StyleSheet.create({

});


export default RestLeaderboard;
