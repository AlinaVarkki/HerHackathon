import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import ColorPalette from "../Assets/ColorPalette";

const TeamScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Team name</Text>
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    title:{
        color: ColorPalette.offwhite,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 20,
    },
});

export default TeamScreen;
