import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import Screen from "../Components/Screen";
import {useNavigation} from "@react-navigation/native";

const FeedScreen = () => {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View screen={"feed"} nav={navigation}>
                <Text style={{color: 'white'}}>feed screen</Text>
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

export default FeedScreen;
