import React from 'react';
import {StyleSheet, View} from "react-native";
import SquareBoi from "./SquareBoi";
import ColorPalette from "../Assets/ColorPalette";

const CompanyStats = () => {

    //TODO: pass data from server into this so it's reuasble



    return (
        <View style={styles.container}>

            <SquareBoi title='20' text='completed challenges' color={ColorPalette.orange}/>
            <SquareBoi title='50' text='something' color={ColorPalette.green}/>
            <SquareBoi title='80' text='something else' color={ColorPalette.blue}/>

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


export default CompanyStats;
