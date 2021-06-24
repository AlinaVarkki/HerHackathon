import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet, View,TouchableWithoutFeedback, Text} from "react-native";


const BottomMenuButton = ({name}) => {
    return (
        <TouchableWithoutFeedback onPress={()=>console.log('pressed')}>
            <View style={styles.icon} >
              <Icon name={name} size={30} color={'white'}/>
              <Text style={{color: 'white', fontSize: 15}}>text</Text>

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
