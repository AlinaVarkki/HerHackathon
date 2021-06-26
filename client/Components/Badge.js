import React from 'react';
import RoundProfileImage from "./RoundProfileImage";
import {Text, View, StyleSheet, Dimensions} from "react-native";
import ColorPalette from "../Assets/ColorPalette";

const Badge = ({title, photo}) => {
    return (
        <View style = {{width: width * 0.28, alignItems: 'center'}}>
            <RoundProfileImage image={photo} size={80}/>
            <Text style={styles.badgeText}>{title}</Text>
        </View>
    );
}
const {width} = Dimensions.get("screen");


const styles = StyleSheet.create({
    badgeText: {
        color: ColorPalette.offwhite,
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 15
    },
});

export default Badge;
