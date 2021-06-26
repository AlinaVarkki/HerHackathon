import React from 'react';
import {StyleSheet, View, Dimensions, Text, TouchableWithoutFeedback, Image} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import RoundProfileImage from "./RoundProfileImage";



const Teammate = ({photo,name}) => {

    return (

    <View style={styles.container}>
        <View style={styles.box}>
            <Image source={photo} style={styles.photo}/>
        </View>
        <Text style={styles.names}>{name}</Text>
    </View>


    );

}

const {width} = Dimensions.get("screen");
const squareSize = width*0.27;

const styles = StyleSheet.create({
    container: {
        width: squareSize,
        height: squareSize+20,
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center',
        margin: 7.5,

    },
    box: {
        width: squareSize,
        height: squareSize,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    names: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 20,

    },
    photo: {
        width: squareSize,
        height: squareSize,
        borderRadius: 20,
    }
});


export default Teammate;
