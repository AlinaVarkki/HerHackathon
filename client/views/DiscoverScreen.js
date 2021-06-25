import React from 'react';
import {StyleSheet, View, Text} from "react-native";


const DiscoverScreen = () => {

    return (
        <View style={styles.container}>
            <View screen={"discover"}>
                <Text style={{color: 'white'}}>DiscoverScreen </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
});

export default DiscoverScreen;
