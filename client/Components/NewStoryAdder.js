import React from 'react';
import {StyleSheet, View, Dimensions, Text,TouchableWithoutFeedback} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import Icon from "react-native-vector-icons/EvilIcons";
import * as ImagePicker from 'expo-image-picker';



const NewStoryAdder = () => {

    const addStory = () => {
        console.log("adding a story");
        captureImage();

    }

    const captureImage = async () => {
        let options = {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
            saveToPhotos: true,
            storageOptions: {
                privateDirectory: true,
            },
            base64: true,
        };

        let result = await ImagePicker.launchCameraAsync(options);

        if (!result.cancelled) {
            const b64 = 'data:image/png;base64,'+result.base64;

        }
    };


    return (
        <TouchableWithoutFeedback onPress={addStory}>
        <View style={{...styles.box, backgroundColor: ColorPalette.darkgrey}}>
            <Icon name={'camera'} size={50} color={'white'}/>

            <Text style={styles.plus}>take a photo</Text>

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
        padding: 5

    },
    plus: {
        fontSize: 13,
        textAlign:'center',
        // fontWeight: 'bold',
        color: ColorPalette.offwhite,
        width:'75%',
        lineHeight:13,
        paddingTop:3
    }
});


export default NewStoryAdder;
