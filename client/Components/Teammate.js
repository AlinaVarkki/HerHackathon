import React from 'react';
import {StyleSheet, View, Dimensions, Text, TouchableWithoutFeedback, Image} from "react-native";
import ColorPalette from "../Assets/ColorPalette";



const Teammate = ({photo}) => {



    return (


            <View style={{...styles.box, backgroundColor: ColorPalette.blue}}>
                <Image source={photo} style={styles.photo}/>
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
        padding: 5,

    },
    photo: {
        width: squareSize,
        height: squareSize,
        borderRadius: 20,
    }
});


export default Teammate;
