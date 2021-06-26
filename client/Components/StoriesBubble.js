import React from 'react';
import {StyleSheet, View, Dimensions, Text, TouchableWithoutFeedback, Image} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import StoriesSlides from "../views/StoriesSlides";
import {useNavigation} from "@react-navigation/native";


const StoriesBubble = ({photo, storyID}) => {

    const navigation = useNavigation();

    const openStory = () => {
        console.log("opening a story")
        navigation.navigate("StoriesSlides");

    }

    return (
        <TouchableWithoutFeedback onPress={openStory}>

        <View style={{...styles.box, backgroundColor: ColorPalette.blue}}>
            <Image source={photo} style={styles.photo}/>
        </View>

        </TouchableWithoutFeedback>

    );

}

const {width} = Dimensions.get("screen");
const squareSize = width*0.23;

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


export default StoriesBubble;
