import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import RoundProfileImage from "../Components/RoundProfileImage";

const ProfilePageScreen = () => {

    return (
        <View style={styles.container}>
                <RoundProfileImage image={require('../Assets/tempProfilePic.png')} size={120} borderRadium={40}/>
                <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', paddingTop: 10}}>Slavka Borovska</Text>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>@slavkabo</Text>
                <Text style={{color: 'white', fontSize: 18, paddingTop: 25}}>A zero-waste enthusiast and an active cyclist. On the weekends, you can find me in the mountains. </Text>
                <Text style={{color: 'white', fontSize: 18, }}>Most proud of: stopped travelling by plane</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
});

export default ProfilePageScreen;
