import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import {SliderBox} from "react-native-image-slider-box";
import {useNavigation} from "@react-navigation/native";




const StoriesSlides = ({route}) => {

    const navigation = useNavigation();

    const {id, pictures} = route.params;

    const [toShow, changeToShow] = useState(['']);

    useEffect(()=> {

        console.log("hi")

        let data = [];

        for (let i=0; i < pictures.length; i++) {
            data.push(pictures[i].photo);

        }
        changeToShow(data);
        console.log(data);

    },[])

    // //TODO get photos from the database and then circle through them, starting with the correct id
    // const photos = [
    //     require('../Assets/tempProfilePic.png'),
    //     require('../Assets/tempProfilePic.png'),
    //     require('../Assets/tempProfilePic.png'),
    //     require('../Assets/tempProfilePic.png'),
    // ];


    return (
        <View style={styles.slide}>
            <SliderBox style={styles.slide} images={toShow} resizeMode={'stretch'} onCurrentImagePressed={() => navigation.goBack()} autoplay circleLoop/>
        </View>
    );

};

const styles = StyleSheet.create({
    slide:{
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    }
});

export default StoriesSlides;

