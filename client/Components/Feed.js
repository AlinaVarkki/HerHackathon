import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView} from 'react-native';
import ActivityCard from "./ActivityCard";
import RoundProfileImage from "./RoundProfileImage";


const Feed = ({children}) => {
    let images1 = [require('../resources/images/1200px-React-icon.svg.png'), require('../resources/images/sketch1.png'), require('../Assets/tempProfilePic.png'), require('../Assets/icon.png')]
    let images2 = [require('../resources/images/1200px-React-icon.svg.png'), require('../resources/images/sketch1.png')]
    let images3 = [require('../resources/images/1200px-React-icon.svg.png'), require('../resources/images/sketch1.png')]
    let images4 = [require('../resources/images/sketch1.png')]
    let images5 = [require('../resources/images/1200px-React-icon.svg.png')]

    return (
        <ScrollView style = {styles.feedContainer} >
            <ActivityCard activity={"Hike 100km"} description={"Lorem ipsum.. I have no idea what is this"} images={images1}></ActivityCard>
            <ActivityCard activity={"Cycle 100km"} description={"Lorem ipsum.. Activityyyyyyy"} images={images2}></ActivityCard>
            <ActivityCard activity={"Have a vegan meal"} description={"Lorem ipsum.. I have no idea what is this"} images={images3}></ActivityCard>
            <ActivityCard activity={"Clean a beach"} description={"Lorem ipsum.. I have no idea what is this"} images={images4}></ActivityCard>
            <ActivityCard activity={"Hike 100km"} description={"Lorem ipsum.. I have no idea what is this"} images={images5}></ActivityCard>
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
