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
            value: '33%',
            text: 'energy use reduction'
        },
        {
            value: '64',
            text: 'teams playing'
        },
        {
            value: '47%',
            text: 'recycling improvement'
        }
        ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.subtitle}>Celebrate your colleagues' success</Text>

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
        fontSize: 17.5,
        paddingTop: 20,
    }
});

export default CompanyScreen;
