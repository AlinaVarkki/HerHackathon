import React from 'react';
import {StyleSheet, View, Dimensions, Text} from "react-native";
import ColorPalette from "../Assets/ColorPalette";

const NewStoryAdder = ({title, text, color}) => {

    return (
        <View style={{...styles.box, backgroundColor: color}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
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


export default NewStoryAdder;
