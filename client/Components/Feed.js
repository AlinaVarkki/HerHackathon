import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView} from 'react-native';
import ActivityCard from "./ActivityCard";


const Feed = ({children}) => {
    return (
        <ScrollView style = {styles.feedContainer} >
            <ActivityCard activity={"Hike 100km"} description={"Lorem ipsum.. I have no idea what is this"}></ActivityCard>
            <ActivityCard activity={"Cycle 100km"} description={"Lorem ipsum.. Activityyyyyyy"}></ActivityCard>
            <ActivityCard activity={"Have a vegan meal"} description={"Lorem ipsum.. I have no idea what is this"}></ActivityCard>
            <ActivityCard activity={"Clean a beach"} description={"Lorem ipsum.. I have no idea what is this"}></ActivityCard>
            <ActivityCard activity={"Hike 100km"} description={"Lorem ipsum.. I have no idea what is this"}></ActivityCard>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    feedContainer: {
        flex: 1,
        margin: 20,
        backgroundColor: 'black'
    }
})

export default Feed;
