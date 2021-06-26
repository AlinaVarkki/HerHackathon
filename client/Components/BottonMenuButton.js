import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet, View,TouchableWithoutFeedback, Text} from "react-native";
import ColorPalette from "../Assets/ColorPalette";


const BottomMenuButton = ({name, callback, text, color}) => {
    return (
        <TouchableWithoutFeedback onPress={callback}>
            <View style={styles.icon} >
              <Icon name={name} size={30} color={color}/>
              <Text style={{color: color, fontSize: 14}}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    icon: {
        width:'20%',
        justifyContent:'center',
        alignItems:'center',
    }
});


export default BottomMenuButton;
