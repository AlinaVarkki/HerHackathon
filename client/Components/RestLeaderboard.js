import React from 'react';
import {StyleSheet, View} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import SquareLeaderboardBoi from "./SquareLeaderboardBoi";
import RectangularLeaderboard from "./RectangularLeaderboard";


const RestLeaderboard = () => {

    return (
        <View>
            <RectangularLeaderboard title='4' teamName='The Straths' photoURL={require('../Assets/tempProfilePic.png')} points='200'/>
            <RectangularLeaderboard title='5' teamName='The Straths' photoURL={require('../Assets/tempProfilePic.png')} points='200'/>
            <RectangularLeaderboard title='6' teamName='The Straths' photoURL={require('../Assets/tempProfilePic.png')} points='200'/>


        </View>
    );

}

const styles = StyleSheet.create({

});


export default RestLeaderboard;
