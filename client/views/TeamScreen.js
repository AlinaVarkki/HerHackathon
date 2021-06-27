import React from 'react';
import {StyleSheet, View, Text,ScrollView, FlatList, SectionList,TouchableWithoutFeedback} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import Teammates from "../Components/Teammates";
import CompanyStats from "../Components/CompanyStats";
import Goal from "../Components/Goal";
import Goals from "../Components/Goals";
import OngoingChallenge from "../Components/OngoingChallenge";
import ActivityCard from "../Components/ActivityCard";
import CompletedChallenge from "../Components/CompletedChallenge";
import TeamActivityCard from "../Components/TeamActivityCard";
import {useNavigation} from "@react-navigation/native";

const TeamScreen = () => {

    const data = [
        {
            value: '1.6k',
            text: 'kg of waste recycled'
        },
        {
            value: '3',
            text: 'trees planted'
        },
        {
            value: '1938',
            text: 'points earned so far'
        }
        ]



    let images1 = [
        require('../Assets/Avatars/Slavka.png'),
        require('../Assets/Avatars/Alina.png'),
        require('../Assets/Avatars/Radina.png'),
        require('../Assets/Avatars/Sophie.png'),
        require('../Assets/Avatars/Kathie.png'),
        ]

    const headerParts = () => (
        <View>
            <Text style={styles.biggerTitle}>The Straths</Text>
            <Teammates/>
            <Text style={styles.title}>Statistics</Text>
            <CompanyStats data={data}/>
            <Text style={styles.title}>Monthly Goals</Text>
            <Goals/>
        </View>
    );



    const ongoingChallenges = [
        {
            name: "Vegan lunch",
            progress: 53,
            description: 'Grab a sustainable lunch with your work buddies.',
            // images: images1,
            photo: require('../Assets/ChallangeImages/Artboard22.png'),
            compData: [
                {
                    value: '-15kg',
                    text: 'CO2 emissions so far'
                },
                {
                    value: '3',
                    text: 'happier animals'
                },
                {
                    value: '+150',
                    text: 'possible points'
                }]
        }
    ];
    const completedChallenges = [
        {
            id: 1,
            name: "Reusing workshop",
            date: "21st June",
            progress:100,
            description: 'Trash or treasure? Why does it have to be only one of those?',
            // images: images1,
            photo: require('../Assets/ChallangeImages/Artboard21.png'),
            compData: [
                {
                    value: '20kg',
                    text: 'worth of trash reused'
                },
                {
                    value: '5',
                    text: 'treasures found'
                },
                {
                    value: '+100',
                    text: 'points'
                }]
        },
        {
            id:2,
            name: "Single use plastics",
            date: "13th June",
            progress:100,
            description: 'Plastic bag, bottle or cutlery - keep saying no. Today, tomorrow, forever.',
            // images: images1,
            photo: require('../Assets/ChallangeImages/Artboard26.png'),
            compData: [
                {
                    value: '120',
                    text: 'plastic products skipped'
                },
                {
                    value: '3',
                    text: 'turtles saved'
                },
                {
                    value: '+120',
                    text: 'points'
                }]
        },
    ];

    const challenges = [
        {
            title: "Ongoing Challenges",
            data: ongoingChallenges
        },
        {
            title: "Completed Challenges",
            data: completedChallenges
        }


    ];

    const renderChallenges = (item) => {
        return(
            <TeamActivityCard activity={item.name} compData={item.compData} description={item.description} progress={item.progress} photo={item.photo} date={item.progress === 100? item.date : ""}/>
          );
    };

    return (
        <View style={styles.container}>

            <SectionList
                sections={challenges}
                keyExtractor={(item,index)=> item+index}
                renderItem={({item}) => renderChallenges(item)}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.title}>{title}</Text>
                )}
                    ListHeaderComponent={headerParts()}
                ListFooterComponent={<View style={{height: 40}}></View>}
            />



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
        paddingLeft:10,
        // paddingTop: 20,
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
