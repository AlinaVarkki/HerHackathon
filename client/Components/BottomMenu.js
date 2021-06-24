import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import BottomMenuButton from "./BottonMenuButton";
import {FlatList} from "react-native-web";


const BottomMenu = () => {
    const DATA = [{
        id: '1',
        title: 'rocket1'
    },{
        id: '2',
        title: 'rocket1'
    },{
        id: '3',
        title: 'rocket1'
    },{
        id: '4',
        title: 'rocket1'
    },{
        id: '5',
        title: 'rocket1'
    }]



    return (
        <View style={styles.row}>
            <BottomMenuButton name="rocket1" style={styles.button}/>
            <BottomMenuButton name="rocket1" style={styles.button}/>
            <BottomMenuButton name="rocket1" style={styles.button}/>
            <BottomMenuButton name="rocket1" style={styles.button}/>
            <BottomMenuButton name="rocket1" style={styles.button}/>
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
