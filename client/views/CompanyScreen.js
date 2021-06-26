import React from 'react';
import {StyleSheet, View, Text, ScrollView} from "react-native";
import SquareBoi from "../Components/SquareBoi";
import Top3Leaderboard from "../Components/Top3Leaderboard";
import CompanyStats from "../Components/CompanyStats";
import ColorPalette from "../Assets/ColorPalette";
import RestLeaderboard from "../Components/RestLeaderboard";
import Stories from "../Components/Stories";


const CompanyScreen = () => {

    const data = [
        {
            value: '20',
            text: 'completed challenges'
        },
        {
            value: '50',
            text: 'cool points'
        },
        {
            value: '80',
            text: 'something else'
        }
        ];

    return (
        <ScrollView style={styles.container}>
            <Stories/>

            <Text style={styles.subtitle}>Latest company statistics</Text>
            <CompanyStats data={data}/>

            <Text style={styles.title}>Leaderboard</Text>
            <Top3Leaderboard/>
            <RestLeaderboard/>

        </ScrollView>
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
