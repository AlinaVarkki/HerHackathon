import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/Feather';
import {StyleSheet, View,TouchableWithoutFeedback, Text, Image} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import RoundProfileImage from "./RoundProfileImage";


const BottomMenuButton = ({name, callback, text, color, font}) => {

    if(font === "AntDesign") {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    <Icon name={name} size={30} color={color}/>
                    <Text style={{color: color, fontSize: 14}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    } else if (font === "FontAwesome") {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    <Icon1 name={name} size={30} color={color}/>
                    <Text style={{color: color, fontSize: 14}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }else if (font === "FontAwesome5") {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    <Icon2 name={name} size={30} color={color}/>
                    <Text style={{color: color, fontSize: 14}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }else if (font === "Ionicons") {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    <Icon3 name={name} size={30} color={color}/>
                    <Text style={{color: color, fontSize: 14}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }else if (font === "Logo") {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    {color === ColorPalette.offwhite ?
                        <Image source={require('../Assets/Logo/LogoWhite.png')} style={{width: 30, height:30}}/>
                    :
                        <Image source={require('../Assets/Logo/LogoInApp.png')} style={{width: 30, height:30}}/>
                    }

                    <Text style={{color: color, fontSize: 14}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }else {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    <RoundProfileImage image={require("../Assets/Avatars/Slavka.png")} size={29}/>
                    <Text style={{color: color, fontSize: 14}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

const styles = StyleSheet.create({
    icon: {
        width:'20%',
        justifyContent:'center',
        alignItems:'center',
    }
});


export default BottomMenuButton;
