import React from 'react';
import {StyleSheet, View, Dimensions, Text,TouchableWithoutFeedback} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import Icon from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/AntDesign";

import * as ImagePicker from 'expo-image-picker';



const NewStoryAdder = ({handler, type}) => {





    return (
        <TouchableWithoutFeedback onPress={handler}>


            {type === "upload" ?
                <View style={{...styles.box, backgroundColor: ColorPalette.darkgrey}}>
                    <Icon name={'image'} size={50} color={'white'}/>

                    <Text style={styles.plus}>upload a photo</Text>
                </View>
            :
                <View style={{...styles.box, backgroundColor: ColorPalette.darkgrey}}>
                    <Icon name={'camera'} size={50} color={'white'}/>

                    <Text style={styles.plus}>take a photo</Text>
                </View>


            }



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
        width:'60%',
        lineHeight:13,
        paddingTop:3
    }
});


export default NewStoryAdder;
