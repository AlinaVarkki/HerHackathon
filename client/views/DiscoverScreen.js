import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import Screen from "../Components/Screen";
import {useNavigation} from "@react-navigation/native";

const DiscoverScreen = () => {

    return (
        <View style={styles.container}>
            <Screen screen={"discover"}>
                <Text style={{color: 'white'}}>DiscoverScreen </Text>
            </Screen>
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
