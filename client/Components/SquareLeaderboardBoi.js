import React from 'react';
import {StyleSheet, View, Dimensions, Text, Image} from "react-native";
import ColorPalette from "../Assets/ColorPalette";

const SquareLeaderboardBoi = ({title, photoURL, teamName, points, color}) => {

    return (
        <View style={{...styles.box, backgroundColor: color}}>
                <Text style={styles.title}>{title}</Text>
                <Image source={photoURL} style={styles.image}/>
                <Text style={styles.name}>{teamName}</Text>
                <Text style={styles.points}>{points}</Text>


        </View>

    );

}

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    box: {
        width: width*0.27,
        height: width*0.3,
        borderRadius: 20,
        margin: 7.5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5

    },

    title:{
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontSize: 25,
        letterSpacing: 1.5,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    image:{
        width: width*0.1,
        height: width*0.1,
        borderRadius: 25,
    },
    name:{
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    points: {
        color: ColorPalette.offwhite,
        textAlign: 'center',
    }
});


export default SquareLeaderboardBoi;
