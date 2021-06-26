import React from 'react';
import {StyleSheet, View} from "react-native";
import SquareBoi from "./SquareBoi";
import ColorPalette from "../Assets/ColorPalette";

const CompanyStats = ({data}) => {

    // const data = [
    //     {
    //         value: '20',
    //         text: 'completed challenges'
    //     },
    //     {
    //         value: '50',
    //         text: 'cool points'
    //     },
    //     {
    //         value: '80',
    //         text: 'something else'
    //     }
    //     ]

    return (
        <View style={styles.container}>

            <SquareBoi title={data[0].value} text={data[0].text} color={ColorPalette.orange}/>
            <SquareBoi title={data[1].value} text={data[1].text} color={ColorPalette.green}/>
            <SquareBoi title={data[2].value} text={data[2].text} color={ColorPalette.blue}/>

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
