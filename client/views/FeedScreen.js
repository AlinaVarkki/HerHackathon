import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Feed from "../components/Feed";
import HorizontalMenu from "../components/HorizontalMenu";

const FeedScreen = () => {


    return (
        <View style={styles.container}>
            <View style={styles.upperPart}>
                <Text style={styles.whiteBigText}>Hello Slavka</Text>
                <Text style={styles.whiteText}>Pick your next challenge</Text>
<HorizontalMenu/>
            </View>
            <View style={styles.lowerPart}>
                <Feed/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'black'
    },
    whiteBigText: {
        paddingLeft: 20,
        paddingTop: 25,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    whiteText: {
        paddingLeft: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    upperPart: {
        flex:1
    },
    lowerPart: {
        flex:5
    }
});

export default FeedScreen;
