import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import SquareBoi from "../Components/SquareBoi";
import Top3Leaderboard from "../Components/Top3Leaderboard";
import CompanyStats from "../Components/CompanyStats";
import ColorPalette from "../Assets/ColorPalette";
import RestLeaderboard from "../Components/RestLeaderboard";
import Stories from "../Components/Stories";


const CompanyScreen = () => {

    return (
        <View style={styles.container}>
            <Stories/>

            <Text style={styles.subtitle}>Latest company statistics</Text>
            <CompanyStats/>

            <Text style={styles.title}>Leaderboard</Text>
            <Top3Leaderboard/>
            <RestLeaderboard/>

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
    subtitle: {
        color: ColorPalette.offwhite,
        fontFamily: 'Roboto',
        fontSize: 15,
        paddingTop: 20,
    }
});

export default CompanyScreen;
