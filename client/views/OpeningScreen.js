import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableWithoutFeedback, View,Text,Image,Dimensions,Animated} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import ColorPalette from "../Assets/ColorPalette";



const OpeningScreen  = () => {

    const navigation = useNavigation();

    const fadeAnim1 = useRef(new Animated.Value(0)).current;


    const animate = () => {
        Animated.timing(fadeAnim1, { toValue: 1, duration: 5000, useNativeDriver:true }).start();

        setTimeout(navigation.navigate("LoginScreen"),5000);
    }

    const finalT = () => {
        setTimeout(animate,1000);
    }

    return(

        <View style={styles.container}>

            <View >
                <Image onLoad={finalT()} style={{...styles.image, }} source={require('../Assets/Logo/LogoInApp.png')} />

                <Animated.Text style={{...styles.title, opacity:fadeAnim1}}>Green Teams</Animated.Text>
            </View>

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
