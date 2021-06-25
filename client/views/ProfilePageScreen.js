import React from 'react';
import {StyleSheet, View, Text, Dimensions} from "react-native";
import RoundProfileImage from "../Components/RoundProfileImage";
import SquareBoi from "../Components/SquareBoi";
import ColorPalette from "../Assets/ColorPalette";

const ProfilePageScreen = () => {
    const {width} = Dimensions.get("screen");
    return (
        <View style={styles.container}>
                <RoundProfileImage image={require('../Assets/tempProfilePic.png')} size={110} borderRadium={40}/>
                <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', paddingTop: 10}}>Slavka Borovska</Text>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>@slavkabo</Text>
                <Text style={{color: 'white', fontSize: 18, paddingTop: 25}}>A zero-waste enthusiast and an active cyclist. On the weekends, you can find me in the mountains. </Text>
                <Text style={{color: 'white', fontSize: 18, }}>Most proud of: stopped travelling by plane</Text>
            <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold', paddingTop: 40}}>Contribution</Text>

            <View style={{flexDirection: 'row'}}>
                <SquareBoi color={ColorPalette.orange} title={"20"} text={"challenges completed"}></SquareBoi>
                <SquareBoi color={ColorPalette.blue} title={"80%"} text={"team engagement"}></SquareBoi>
                <SquareBoi color={ColorPalette.darkgrey} title={"5"} text={"consecutive team challenges"}></SquareBoi>
            </View>

            <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold', paddingTop: 20, paddingBottom: 10}}>Badges</Text>
            <View style={{flexDirection: 'row'}}>
                <View style = {{width: width * 0.28, alignItems: 'center'}}>
                    <RoundProfileImage image={require('../resources/images/1200px-React-icon.svg.png')} size={80}/>
                    <Text style={styles.badgeText}>Composting</Text>
                    <Text style={styles.badgeText}>enthusiast</Text>
                </View>
                <View style = {{width: width * 0.28, alignItems: 'center'}}>
                    <RoundProfileImage image={require('../resources/images/1200px-React-icon.svg.png')} size={80}/>
                    <Text style={styles.badgeText}>Zero-waste</Text>
                    <Text style={styles.badgeText}>newbie</Text>
                </View>
                <View style = {{width: width * 0.28, alignItems: 'center'}}>
                    <RoundProfileImage image={require('../resources/images/1200px-React-icon.svg.png')} size={80}/>
                    <Text style={styles.badgeText}>Turtle</Text>
                    <Text style={styles.badgeText}>Protector</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    badgeText: {
        color: 'white'
    }
});

export default ProfilePageScreen;
