import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, FlatList, Image} from 'react-native';
import ActivityCard from "./ActivityCard";
import RoundProfileImage from "./RoundProfileImage";
import activitiesApi from "../api/activitiesApi";
import StickingOutCard from "./StickingOutCard";


const Feed = ({children}) => {

    useEffect(() => {
        loadListings();
    }, []);

    const [activities, setActivities] = useState([]);

    const photos = [
        require('../Assets/ChallangeImages/Artboard22.png'),
        require('../Assets/ChallangeImages/Artboard20.png'),
        require('../Assets/ChallangeImages/Artboard28.png'),
        require('../Assets/ChallangeImages/Artboard27.png'),
        require('../Assets/ChallangeImages/Artboard15.png')
    ]

    //get all activities with all the info
    const loadListings = async () => {
        // await activitiesApi.getActivities().then(r => {
        //     let i = 0;
        //
            let ac = []
        //
        //     // getting rid of server side code to make a nice apk
        //     while (i < r.data.length) {
        //         console.log("HEREEE")
        //         let activities = {}
        //         activities["id"] = r.data[i]
        //         activities["activity"] = r.data[i + 1]
        //         activities["description"] = r.data[i + 2]
        //         activities["names"] = r.data[i + 3]
        //         activities["category"] = r.data[i + 4]
        //         activities["photo"] = photos[i/5];
        //         ac.push(activities)
        //         i = i + 5
        //     }

            let activities = {}
            activities["id"] = 5
            activities["activity"] = "Vegan lunch"
            activities["description"] = "Grab a sustainable lunch with your work buddies . Quick, easy and good for our planet!"
            activities["names"] = "Sophie Alina Radina Annie"
            activities["category"] = "food"
            activities["photo"] = photos[1];
            ac.push(activities)

            activities = {}
            activities["id"] = 6
            activities["activity"] = "Sustainability movie"
            activities["description"] = "Watch and educate with you mates! Check moviesuggestions.com"
            activities["names"] = "Alina Radina Sophie"
            activities["category"] = "Education"
            activities["photo"] = photos[3];
            ac.push(activities)

            activities = {}
            activities["id"] = 7
            activities["activity"] = "Farmer's Market Visit"
            activities["description"] = "Support our local farmers while going for a fun trip with your mates"
            activities["names"] = "Alina Annie"
            activities["category"] = "Food"
            activities["photo"] = photos[2];
            ac.push(activities)

            activities = {}
            activities["id"] = 8
            activities["activity"] = "Pitch sustainable idea "
            activities["description"] = "We would LOVE to hear from you, email us at ideas@outlook.com"
            activities["names"] = "Sophie"
            activities["category"] = "Education"
            activities["photo"] = photos[0];
            ac.push(activities)

            activities = {}
            activities["id"] = 9
            activities["activity"] = "Clean a beach/field/forest"
            activities["description"] = "Join the local charity organization and make an impact"
            activities["names"] = "Sophie Alina Annie Radina"
            activities["category"] = "Education"
            activities["photo"] = photos[4];
            ac.push(activities)

            // activities = {}
            // activities["id"] = 6
            // activities["activity"] = "Get vegan lunch"
            // activities["description"] = "please"
            // activities["names"] = "Sophie Radina Alina Annie"
            // activities["category"] = "food"
            // activities["photo"] = photos[2/5];
            // ac.push(activities)

            setActivities(ac);
        //     console.log(r.data)
        // })
    }



    const activityRender = ({item}) => (
        <StickingOutCard
            activity={item.activity}
            description={item.description}
            images={getImages(item.names)}
            names={item.names.split(" ")}
            photo={item.photo}
        />
    )

    const getImages = (names) => {
        let images = []
        let namesArr = names.split(" ")
        console.log("Hey" + names)
        for (let i = 0; i < namesArr.length; i++) {
            if (namesArr[i] == 'Alina') images.push(require(`../resources/Avatars/Alina.png`))
            if (namesArr[i] == 'Annie') images.push(require(`../resources/Avatars/Annie.png`))
            if (namesArr[i] == 'Kathie') images.push(require(`../resources/Avatars/Kathie.png`))
            if (namesArr[i] == 'Radina') images.push(require(`../resources/Avatars/Radina.png`))
            if (namesArr[i] == 'Slavka') images.push(require(`../resources/Avatars/Slavka.png`))
            if (namesArr[i] == 'Sophie') images.push(require(`../resources/Avatars/Sophie.png`))
        }
        return images
    }

    return (
        <View style={{flex: 1}}>
            <FlatList showsVerticalScrollIndicator={false}
                      data={activities}
                      keyExtractor={item => item.id.toString()}
                      renderItem={activityRender}
            />
        </View>
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
