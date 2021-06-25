import React from 'react';
import {StyleSheet, View, Text} from "react-native";

const TeamScreen = () => {

    return (
        <View style={styles.container}>
                <Text style={{color: 'white'}}>team screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
});

export default TeamScreen;
