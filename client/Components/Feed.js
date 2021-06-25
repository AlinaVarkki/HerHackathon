import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView} from 'react-native';
import ActivityCard from "./ActivityCard";


const Feed = ({children}) => {
    return (
        <ScrollView style = {styles.feedContainer} >
            <ActivityCard></ActivityCard>
            <ActivityCard></ActivityCard>
            <ActivityCard></ActivityCard>
            <ActivityCard></ActivityCard>
            <ActivityCard></ActivityCard>
            <ActivityCard></ActivityCard>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    feedContainer: {
        flex: 1,
        margin: 20
    }
})

export default Feed;
