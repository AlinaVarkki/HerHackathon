import React from 'react';
import {StyleSheet, View, Dimensions, Text} from "react-native";
import ColorPalette from "../Assets/ColorPalette";

const Goal = ({title, progress, label}) => {

    return (

        <View style={styles.box}>
            <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.title}>{label}</Text>

            </View>
            <View>
                <View style={styles.barBack}></View>
                <View style={{...styles.barFront, width: lineWidth*progress/100}}></View>
            </View>
            </View>
            <View>
                <Text style={styles.progress}>{progress}%</Text>
            </View>

        </View>

    );

};

const {width} = Dimensions.get("screen");
const lineWidth = width*0.75;

const styles = StyleSheet.create({
    box:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginVertical: 10,
    },
    container:{
        width: lineWidth,
    },
    title: {
      color: ColorPalette.offwhite,
        paddingBottom:10,
        fontSize: 15,
    },
    progress:{
        color: ColorPalette.offwhite,
        alignItems: 'center',
        fontSize: 23,
        fontWeight: 'bold',
    },
    info:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    barBack: {
        width: '100%',
        height: 15,
        borderRadius:25,
        backgroundColor: ColorPalette.darkgrey,
    },
    barFront: {
        height: 15,
        borderRadius:25,
        backgroundColor: ColorPalette.offwhite,
        position: 'absolute'

    },


});

export default Goal;
