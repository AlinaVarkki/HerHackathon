import React from 'react';
import {StyleSheet, View, FlatList} from "react-native";
import SquareBoi from "./SquareBoi";
import ColorPalette from "../Assets/ColorPalette";

const Teammates = () => {

    const teammates = [
        {   name: 'slavka',
            photo: ''
        },
        {   name: 'radina',
            photo: ''
        },
        {   name: 'alina',
            photo: ''
        },
        {   name: 'kathie',
            photo: ''
        },
        {   name: 'sophie',
            photo: ''
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList

            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});


export default Teammates;
