import React from 'react';
import {StyleSheet, View, Text,TouchableWithoutFeedback} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import Treat from "../Components/Treat";
import Treats from "../Components/Treats";
import InspiringArticle from "../Components/InspiringArticle";
import ListOfArticles from "../Components/ListOfArticles";


const DiscoverScreen = () => {

    return (
       <View style={styles.container}>
            <Text style={styles.title}>Team treat</Text>
            <Treats/>

            <Text style={styles.title}>Get Inspired</Text>
            <ListOfArticles/>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    title:{
        color: ColorPalette.offwhite,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 20,
    },
});

export default DiscoverScreen;
