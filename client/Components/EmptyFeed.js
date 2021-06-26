import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, FlatList} from 'react-native';
import ActivityCard from "./ActivityCard";
import RoundProfileImage from "./RoundProfileImage";
import activitiesApi from "../api/activitiesApi";
import StickingOutCard from "./StickingOutCard";
import EmptyChallenges from "../Assets/EmptyChallenges";


const EmptyFeed = ({category}) => {


    const [activities, setActivities] = useState([]);

    useEffect(()=>{
        const allActivities = EmptyChallenges.activities;

        let chosenActivities = []

        for (let i = 0; i < allActivities.length; i++) {
            console.log(allActivities[i]);
            if (allActivities[i].category === category) {
                chosenActivities.push(allActivities[i]);
            }
        }

        setActivities(chosenActivities);

    },[])


    const activityRender = ({ item }) => (
        <StickingOutCard
            activity={item.title}
            description={item.description}
        />
    )


    return (

        <FlatList style = {{flex: 1}} showsVerticalScrollIndicator={false}
                  data = {activities}
                  keyExtractor = {item => item.id.toString()}
                  renderItem={activityRender}
        />

    );
};

const styles = StyleSheet.create({
    feedContainer: {
        flex: 1,
        margin: 20,
        backgroundColor: 'black'
    }
})

export default EmptyFeed;
