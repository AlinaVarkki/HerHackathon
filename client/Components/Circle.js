import React from 'react';
import {View, StyleSheet, Dimensions} from "react-native";
import ColorPalette from "../Assets/ColorPalette";

const Circle = () => {

    return (


    <View>
        <View style={styles.circle}>

        </View>
        <View style={styles.halfcircle}>

        </View>
    </View>

    );

};

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({

    circle:{
        width: width*0.25,
        height: width*0.25,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: ColorPalette.grey,
        backgroundColor: 'black',
        margin: 10

    },
    halfcircle:{
        width: width*0.25,
        height: width*0.25,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,

        borderWidth: 5,
        borderColor: ColorPalette.grey,
        backgroundColor: 'black',
        margin: 10
    }

});

export default Circle;
