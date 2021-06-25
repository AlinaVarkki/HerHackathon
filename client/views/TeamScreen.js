import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import Teammates from "../Components/Teammates";
import CompanyStats from "../Components/CompanyStats";
import Goal from "../Components/Goal";
import Goals from "../Components/Goals";
import OngoingChallenge from "../Components/OngoingChallenge";
import ActivityCard from "../Components/ActivityCard";
import CompletedChallenge from "../Components/CompletedChallenge";

const TeamScreen = () => {

    let images1 = [
        require('../Assets/Avatars/Slavka.png'),
        require('../Assets/Avatars/Alina.png'),
        require('../Assets/Avatars/Radina.png'),
        require('../Assets/Avatars/Sophie.png'),
        require('../Assets/Avatars/Kathie.png'),
        ]

    return (
        <View style={styles.container}>
            <Text style={styles.biggerTitle}>The Straths</Text>
            <Teammates/>
            <Text style={styles.title}>Statistics</Text>
            <CompanyStats/>
            <Text style={styles.title}>Monthly Goals</Text>
            <Goals/>
            <Text style={styles.title}>Ongoing challenges</Text>
            <OngoingChallenge activity={"Hike 100km"} progress={53} images={images1}/>

            <Text style={styles.title}>Completed challenges</Text>

            <CompletedChallenge activity={"Hike 100km"} date={'5th Nov'} images={images1}/>
            <CompletedChallenge activity={"Hike 100km"} date={'5th Nov'} images={images1}/>

            <View style={{height: 40}}></View>



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
