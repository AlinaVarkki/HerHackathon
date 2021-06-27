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
            name: "Hike 100km",
            progress: 53,
            images: images1
        }
    ];
    const completedChallenges = [
        {
            id: 1,
            name: "Hike 20km",
            date: "5th Nov",
            progress:100,
            images: images1
        },
        {
            id:2,
            name: "Hike 300km",
            date: "5th Nov",
            progress:100,
            images: images1
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
            <TeamActivityCard activity={item.name} progress={item.progress} images={item.images} date={item.progress === 100? item.date : ""}/>
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
