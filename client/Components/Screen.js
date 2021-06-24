import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import BottomMenu from './BottomMenu'


const Screen = ({children}) => {
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView style={styles.main}>
                {children}
            </ScrollView>
            <View style={styles.bottom}>
                <BottomMenu/>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        flex: 1,
        paddingTop:50,
        backgroundColor: 'green'
    },
    main: {
        height: '90%',
        paddingHorizontal: 20,
        backgroundColor: 'white'

    },
    bottom:{
        height: '10%',
        backgroundColor: 'pink'
    }
});

export default Screen;
