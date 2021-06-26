import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableWithoutFeedback, View,Text,Image,Dimensions,Animated} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import ColorPalette from "../Assets/ColorPalette";


const OpeningScreen  = () => {

    const animate = () => {
        Animated.timing()
    }

    return(

        <View style={styles.container}>

            <Animated.View>
                <Image  style={styles.image} source={require('../Assets/Logo/LogoInApp.png')} onLoad={animate}/>
                <Text style={styles.title}>Green Teams</Text>
            </Animated.View>

        </View>
    )


}

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        height:'100%',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop:'20%'
    },
    image:{
        width: width*0.8,
        height: width*0.8,
    },
    title:{
        color: ColorPalette.offwhite,
        fontSize: 50,
        fontWeight: 'bold',
        letterSpacing: 1.3,
        // fontFamily:'Roboto',
    }
});

export default OpeningScreen;
