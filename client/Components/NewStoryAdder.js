import React from 'react';
import {StyleSheet, View, Dimensions, Text,TouchableWithoutFeedback} from "react-native";
import ColorPalette from "../Assets/ColorPalette";


const NewStoryAdder = () => {

    const addStory = () => {
        console.log("adding a story")
    }


    return (
        <TouchableWithoutFeedback onPress={addStory}>
        <View style={{...styles.box, backgroundColor: ColorPalette.offwhite}}>
            <Text style={styles.plus}>+</Text>
        </View>
        </TouchableWithoutFeedback>

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
    plus: {
        fontSize: 55,
        // fontWeight: 'bold',
        color: ColorPalette.darkgrey
    }
});


export default NewStoryAdder;
