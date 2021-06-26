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
            while (i < r.data.length) {
                console.log("HEREEE")
                let activities = {}
                activities["id"] = r.data[i]
                activities["activity"] = r.data[i + 1]
                activities["description"] = r.data[i + 2]
                activities["names"] = r.data[i + 3]
                activities["category"] = r.data[i + 4]
                ac.push(activities)
                i = i + 5
            }

            setActivities(ac);
            console.log(r.data)
        })
    }

    const activityRender = ({ item }) => (
        <ActivityCard
            activity={item.activity}
            description={item.description}
            images={getImages(item.names)}
        />
    )

    const getImages = ( names ) => {
        let images = []
        let namesArr = names.split(" ")
        console.log("Hey" + names)
        for(let i = 0; i < namesArr.length; i++) {
            if(namesArr[i] == 'Alina') images.push(require(`../resources/Avatars/Alina.png`))
            if(namesArr[i] == 'Annie') images.push(require(`../resources/Avatars/Annie.png`))
            if(namesArr[i] == 'Kathie') images.push(require(`../resources/Avatars/Kathie.png`))
            if(namesArr[i] == 'Radina') images.push(require(`../resources/Avatars/Radina.png`))
            if(namesArr[i] == 'Slavka') images.push(require(`../resources/Avatars/Slavka.png`))
            if(namesArr[i] == 'Sophie') images.push(require(`../resources/Avatars/Sophie.png`))
        }
        return images
    }

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

export default Feed;
