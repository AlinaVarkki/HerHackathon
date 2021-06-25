import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import Teammates from "../Components/Teammates";
import CompanyStats from "../Components/CompanyStats";
import Goal from "../Components/Goal";
import Goals from "../Components/Goals";

const TeamScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.biggerTitle}>Team name</Text>
            {/*<Teammates/>*/}
            <Text style={styles.title}>Statistics</Text>
            <CompanyStats/>
            <Text style={styles.title}>Monthly Goals</Text>
            <Goals/>





        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    biggerTitle: {
        color: ColorPalette.offwhite,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 35,
        paddingTop: 20,
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
