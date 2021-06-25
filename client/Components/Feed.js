import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, FlatList} from 'react-native';
import ActivityCard from "./ActivityCard";
import RoundProfileImage from "./RoundProfileImage";
import activitiesApi from "../api/activitiesApi";


const Feed = ({children}) => {

    useEffect(() => {
        loadListings();
    }, []);


    const [activities, setActivities] = useState([]);

    //get all activities with all the info
    const loadListings = async() => {
        await activitiesApi.getActivities().then(r => {
            let i = 0;

            let ac = []
            console.log("SIIIIIZe",r.data.length)
            while (i < r.data.length) {
                console.log("HEREEE")
                let activities = {}
                activities["id"] = r.data[i]
                activities["activity"] = r.data[i + 1]
                activities["description"] = r.data[i + 2]
                activities["names"] = r.data[i + 3]
                ac.push(activities)
                i = i + 4
            }

            setActivities(ac);
            console.log(r.data)
        })
    }

    let images1 = [require('../resources/images/1200px-React-icon.svg.png'), require('../resources/images/sketch1.png'), require('../Assets/tempProfilePic.png'), require('../Assets/icon.png')]
    let images2 = [require('../resources/images/1200px-React-icon.svg.png'), require('../resources/images/sketch1.png')]
    let images3 = [require('../resources/images/1200px-React-icon.svg.png'), require('../resources/images/sketch1.png')]
    let images4 = [require('../resources/images/sketch1.png')]
    let images5 = [require('../resources/images/1200px-React-icon.svg.png')]

    const activityRender = ({ item }) => (
        <ActivityCard
            activity={item.activity}
            description={item.description}
            images={images5}
        />
    )

    return (
        // <ScrollView style = {styles.feedContainer} >
        //     <ActivityCard activity={"Hike 100km"} description={"Lorem ipsum.. I have no idea what is this"} images={images1}></ActivityCard>
        //     <ActivityCard activity={"Cycle 100km"} description={"Lorem ipsum.. Activityyyyyyy"} images={images2}></ActivityCard>
        //     <ActivityCard activity={"Have a vegan meal"} description={"Lorem ipsum.. I have no idea what is this"} images={images3}></ActivityCard>
        //     <ActivityCard activity={"Clean a beach"} description={"Lorem ipsum.. I have no idea what is this"} images={images4}></ActivityCard>
        //     <ActivityCard activity={"Hike 100km"} description={"Lorem ipsum.. I have no idea what is this"} images={images5}></ActivityCard>
        // </ScrollView>
        //

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

export default Feed;
