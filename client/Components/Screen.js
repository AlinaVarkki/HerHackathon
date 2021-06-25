import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import BottomMenu from './BottomMenu'
import {useNavigation} from "@react-navigation/native";
import BottomMenuButton from "./BottonMenuButton";



const Screen = ({screen, callback, children, nav}) => {

    const cb = () => {
        console.log("hi")
    };


    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView style={styles.main}>
                {children}
            </ScrollView>
            <View style={styles.bottom}>
                {/*<BottomMenu nav={nav}/>*/}
                <View style={styles.row}>
                    <BottomMenuButton name="rocket1" text="home" callback={cb} style={styles.button}/>
                    <BottomMenuButton name="rocket1" text="team" callback={cb} style={styles.button}/>
                    <BottomMenuButton name="rocket1" text="company" callback={cb} style={styles.button}/>
                    <BottomMenuButton name="rocket1" text="discover" callback={cb} style={styles.button}/>
                    <BottomMenuButton name="rocket1" text="profile" callback={cb} style={styles.button}/>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        flex: 1,
        paddingTop:50,
        backgroundColor: 'black'
    },
    main: {
        height: '87.5%',
        paddingHorizontal: 20,
        backgroundColor: 'black'
    },
    bottom:{
        height: '12.5%',
        width: '100%',
        alignItems: 'center',

        borderTopWidth: 1,
        borderTopColor: 'grey'
    },
    row:{
        flex:1,
        flexDirection: 'row',
        paddingTop: 5,
    },
});

export default Screen;
