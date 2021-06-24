import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import Screen from "../Components/Screen";
import {useNavigation} from "@react-navigation/native";

const FeedScreen = () => {


    return (
        <View style={styles.container}>
            <Screen screen={"feed"}>
                <Text style={{color: 'white'}}>feed screen</Text>
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

export default FeedScreen;
