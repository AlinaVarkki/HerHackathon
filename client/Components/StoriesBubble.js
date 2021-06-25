import React from 'react';
import {StyleSheet, View, Dimensions, Text} from "react-native";
import ColorPalette from "../Assets/ColorPalette";

const StoriesBubble = () => {

    return (
        <View style={{...styles.box, backgroundColor: ColorPalette.blue}}>

        </View>

    );

}

const {width} = Dimensions.get("screen");
const squareSize = width*0.27;

const styles = StyleSheet.create({
    box: {
        width: squareSize,
        height: squareSize,
        borderRadius: 20,
        margin: 7.5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5

    },
    title:{
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontSize: 30,
        letterSpacing: 1.5,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    text:{
        color: ColorPalette.offwhite,
        textAlign: 'center',

    }
});


export default StoriesBubble;
