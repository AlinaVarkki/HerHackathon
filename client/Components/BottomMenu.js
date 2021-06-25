import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import BottomMenuButton from "./BottonMenuButton";
import {useNavigation} from "@react-navigation/native";


const BottomMenu = ({nav}) => {

    const cb = () => {
      console.log("hi")
    };


    return (
        <View style={styles.row}>
            <BottomMenuButton name="rocket1" text="home" callback={cb} style={styles.button}/>
            <BottomMenuButton name="rocket1" text="team" callback={cb} style={styles.button}/>
            <BottomMenuButton name="rocket1" text="company" callback={cb} style={styles.button}/>
            <BottomMenuButton name="rocket1" text="discover" callback={cb} style={styles.button}/>
            <BottomMenuButton name="rocket1" text="profile" callback={cb} style={styles.button}/>
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection: 'row',
        paddingTop: 5,
    },
    button: {

    }
})


export default BottomMenu;

//
// <BottomMenuButton name="rocket1" style={styles.button}/>
// <BottomMenuButton name="rocket1" style={styles.button}/>
// <BottomMenuButton name="rocket1" style={styles.button}/>
// <BottomMenuButton name="rocket1" style={styles.button}/>
// <BottomMenuButton name="rocket1" style={styles.button}/>

// <FlatList
//     data={DATA}
//     renderItem={renderItem}
//     keyExtractor={item => item.id}
//     horizontal={true}
// />
