import React from 'react';
import {StyleSheet, View, FlatList, Dimensions,Text} from "react-native";
import SquareBoi from "./SquareBoi";
import ColorPalette from "../Assets/ColorPalette";
import RoundProfileImage from "./RoundProfileImage";
import Teammate from "./Teammate";

const Teammates = () => {

    const teammates = [
        {   name: 'slavka',
            photo: require('../Assets/tempProfilePic.png')
        },
        {   name: 'radina',
            photo: require('../Assets/tempProfilePic.png')
        },
        {   name: 'alina',
            photo: require('../Assets/tempProfilePic.png')
        },
        {   name: 'kathie',
            photo: require('../Assets/tempProfilePic.png')
        },
        {   name: 'annie',
            photo: require('../Assets/tempProfilePic.png')
        },
        {   name: 'sophie',
            photo: require('../Assets/tempProfilePic.png')
        },
    ];

    const renderPeople = ({item}) => (
        <View style={styles.photo}>
            <RoundProfileImage size={squareSize} image={item.photo}/>
            <Text style={styles.names}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.line}>
                <Teammate name={teammates[0].name} photo={teammates[0].photo}/>
                <Teammate name={teammates[1].name} photo={teammates[1].photo}/>
                <Teammate name={teammates[2].name} photo={teammates[2].photo}/>

            </View>
            <View style={styles.line}>
                <Teammate name={teammates[3].name} photo={teammates[3].photo}/>
                <Teammate name={teammates[4].name} photo={teammates[4].photo}/>
                <Teammate name={teammates[5].name} photo={teammates[5].photo}/>

            </View>


        </View>
    );
}

const {width} = Dimensions.get("screen");
const squareSize = width*0.25;

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    list:{
        flexDirection: 'row',
        backgroundColor: 'red',
        width: '100%',
    },
    photo: {
        padding: squareSize*0.1,
    },
    names: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 20,

    },
    line:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        }
});


export default Teammates;
