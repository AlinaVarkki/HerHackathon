import React from 'react';
import {StyleSheet, View, Dimensions, Text, Image, TouchableWithoutFeedback, FlatList} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import InspiringArticle from "./InspiringArticle";
import {color} from "react-native-reanimated";
import Treat from "./Treat";

const ListOfArticles = ({header}) => {

    const colors = [ColorPalette.orange, ColorPalette.blue, ColorPalette.darkgrey];

    const articles = [
        {
            id:'1',
          title: "Something Inspiring Like for Real",
          category:   "ZERO-WASTE",
            url:"https://www.youtube.com/watch?v=VgojnNgmgVs",
            color:colors[Math.floor(Math.random() * colors.length)]
        },
        {
            id:'2',
            title: "Something Inspiring Like for Real",
            category:   "ZERO-WASTE",
            url:"https://www.youtube.com/watch?v=VgojnNgmgVs",
            color:colors[Math.floor(Math.random() * colors.length)]
        },
        {
            id:'3',
            title: "Something Inspiring Like for Real",
            category:   "ZERO-WASTE",
            url:"https://www.youtube.com/watch?v=VgojnNgmgVs",
            color:colors[Math.floor(Math.random() * colors.length)]
        },
        {
            id:'4',
            title: "Something Inspiring Like for Real",
            category:   "ZERO-WASTE",
            url:"https://www.youtube.com/watch?v=VgojnNgmgVs",
            color:colors[Math.floor(Math.random() * colors.length)]
        },
    ];

    const renderArticle = ({item}) => (
        <InspiringArticle title={item.title} category={item.category} url={item.url} color={item.color}/>
    );

    return (
        <View style={styles.container}>

            <FlatList
                data={articles}
                renderItem={renderArticle}
                keyExtractor={item => item.id}
                ListHeaderComponent={header}

            />


        </View>
    );

}

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({

});

export default ListOfArticles;
