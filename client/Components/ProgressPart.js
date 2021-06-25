import React from 'react';
import {StyleSheet, View, Dimensions, Text} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import Goal from "./Goal";

const ProgressPart = ({title, progress, label, color = ColorPalette.offwhite}) => {
    return (

        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.title}>{label}</Text>

            </View>
            <View>
                <View style={{...styles.barBack, backgroundColor: (color === ColorPalette.offwhite ? ColorPalette.darkgrey : 'black')}}></View>
                <View style={{...styles.barFront, width: progress+'%', backgroundColor: color}}></View>
            </View>
        </View>

    );

};


const styles = StyleSheet.create({
    box:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginVertical: 10,
    },

    title: {
        color: ColorPalette.offwhite,
        paddingBottom:5,
        fontSize: 17,
    },

    info:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    barBack: {
        width: '100%',
        height: 10,
        borderRadius:25,
        backgroundColor: ColorPalette.darkgrey,
    },
    barFront: {
        height: 10,
        borderRadius:25,
        position: 'absolute'

    },


});

export default ProgressPart;
