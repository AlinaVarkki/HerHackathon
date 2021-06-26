import React from 'react';
import {StyleSheet, View, Text,ScrollView, FlatList, SectionList} from "react-native";
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

    const headerParts = () => (
        <View>
            <Text style={styles.biggerTitle}>The Straths</Text>
            <Teammates/>
            <Text style={styles.title}>Statistics</Text>
            <CompanyStats/>
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
            name: "Hike 100km",
            date: "5th Nov",
            progress:100,
            images: images1
        },
        {
            id:2,
            name: "Hike 100km",
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
        console.log(item);
        if (item.progress!==100) {
            return(<OngoingChallenge activity={item.name} progress={item.progress} images={item.images}/>);
        } else {
            return(<CompletedChallenge activity={item.name} date={item.date} images={item.images}/>);
        }
    };

    return (
        <View style={styles.container}>
            {/*<Text style={styles.biggerTitle}>The Straths</Text>*/}
            {/*<Teammates/>*/}
            {/*<Text style={styles.title}>Statistics</Text>*/}
            {/*<CompanyStats/>*/}
            {/*<Text style={styles.title}>Monthly Goals</Text>*/}
            {/*<Goals/>*/}
            {/*<Text style={styles.title}>Ongoing challenges</Text>*/}
            {/*<OngoingChallenge activity={"Hike 100km"} progress={53} images={images1}/>*/}

            {/*<Text style={styles.title}>Completed challenges</Text>*/}

            {/*<CompletedChallenge activity={"Hike 100km"} date={'5th Nov'} images={images1}/>*/}
            {/*<CompletedChallenge activity={"Hike 100km"} date={'5th Nov'} images={images1}/>*/}


            {/*<FlatList*/}
            {/*    data={ongoingChallenges}*/}
            {/*    renderItem={({item})=>(<OngoingChallenge activity={item.name} progress={item.progress} images={item.images}/>)}*/}
            {/*    keyExtractor={item => item.id}*/}
            {/*    ListHeaderComponent={headerParts()}*/}
            {/*/>*/}

            {/*<FlatList*/}
            {/*    data={completedChallenges}*/}
            {/*    renderItem={({item}) => (<CompletedChallenge activity={item.name} date={item.date} images={item.images}/>)}*/}
            {/*    keyExtractor={item => item.id}*/}
            {/*    ListHeaderComponent={<Text style={styles.title}>Completed challenges</Text>}*/}
            {/*    ListFooterComponent={<View style={{height: 40}}></View>}*/}
            {/*/>*/}

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
