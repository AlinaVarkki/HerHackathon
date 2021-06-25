import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import ColorPalette from "../Assets/ColorPalette";

const RectangularLeaderboard = ({title, photoURL, teamName, points}) => {
    return (
        <View style={styles.box}>
            <View style={styles.left}>

            <Text style={styles.title}>{title}</Text>
            <Image source={photoURL} style={styles.image}/>
            <Text style={styles.name}>{teamName}</Text>
            </View>
            <View style={styles.right}>

            <Text style={styles.points}>{points}</Text>
            </View>
        </View>
    );


}
const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    box: {
        height: width*0.18,
        borderRadius: 25,
        margin: 7.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: ColorPalette.darkgrey,


    },
    left: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',

    },
    right: {
        // backgroundColor: 'yellow'
        alignItems: 'center',
        marginHorizontal: 30


    },
    title:{
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontSize: 25,
        letterSpacing: 1.5,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginHorizontal: 20,
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
        fontWeight: 'bold',
        marginHorizontal: 20,
        fontSize: 15,


    },
    points: {
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,




    }

});


export default RectangularLeaderboard;
