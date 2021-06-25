import React from 'react';
import {StyleSheet, View, Dimensions, Text, Image,TouchableWithoutFeedback} from "react-native";
import ColorPalette from "../Assets/ColorPalette";

const Treat = ({title, category, points}) => {

    return (
        <View style={{...styles.box}}>
            <View>
            <Text style={styles.category}>{category}</Text>

            <Text style={styles.title}>{title}</Text>


            </View>
            <View>
                <Text style={styles.points}>{points} points</Text>
                <TouchableWithoutFeedback>
                    <View style={styles.button}>
                    <Text style={styles.buttonText}>get</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </View>

    );

}

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    box: {
        width: width*0.37,
        height: width*0.47,
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 7.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        paddingVertical: 15,
        backgroundColor: ColorPalette.orange

    },
    category:{
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontSize: 15,
        letterSpacing: 1.5,
        fontFamily: 'Roboto',
    },
    title:{
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontSize: 20,
        letterSpacing: 1.5,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },

    name:{
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    points: {
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontSize:15,
    },
    button: {
        backgroundColor: ColorPalette.offwhite,
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 20,
        marginTop:7,

    },
    buttonText: {
        color: ColorPalette.darkgrey,
        fontSize:15,
        textAlign: 'center',

    }

});

export default Treat;
