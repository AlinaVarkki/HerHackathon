import React from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView} from "react-native";
import RoundProfileImage from "../Components/RoundProfileImage";
import SquareBoi from "../Components/SquareBoi";
import ColorPalette from "../Assets/ColorPalette";
import CompanyStats from "../Components/CompanyStats";
import Badge from "../Components/Badge";


const ProfilePageScreen = () => {

    const data = [
        {
            value: '20',
            text: 'challenges completed'
        },
        {
            value: '80%',
            text: 'team engagement'
        },
        {
            value: '5',
            text: 'consecutive team challenges'
        }
    ];

    return (
        <ScrollView style={styles.container}>
                <RoundProfileImage image={require('../Assets/Avatars/Slavka.png')} size={110} borderRadium={40}/>
                <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', paddingTop: 10}}>Slavka Borovska</Text>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>@slavkabo</Text>
                <Text style={{color: 'white', fontSize: 18, paddingTop: 25}}>A zero-waste enthusiast and an active cyclist. On the weekends, you can find me in the mountains. </Text>
                <Text style={{color: 'white', fontSize: 18, }}>Most proud of: stopped travelling by plane</Text>

            <Text style={styles.title} >Contribution</Text>

            <CompanyStats data={data}/>

            <Text style={{...styles.title, paddingBottom: 10}}>Badges</Text>

            <View style={styles.badges}>
                <Badge title={"Composting enthusiast"} photo={require('../Assets/SquareBoiis/Boi2.png')}/>
                <Badge title={"Zero-waste newbie"} photo={require('../Assets/SquareBoiis/Boi6.png')}/>
                <Badge title={"Cool Turtle Protector"} photo={require('../Assets/SquareBoiis/Boi1.png')}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    title:{
        color: ColorPalette.offwhite,
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20,
    },
    badges:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 20,
    }
});

export default ProfilePageScreen;
