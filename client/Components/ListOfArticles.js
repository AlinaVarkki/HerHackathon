import React from 'react';
import {StyleSheet, View, Dimensions, Text, Image, TouchableWithoutFeedback, FlatList} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import InspiringArticle from "./InspiringArticle";
import {color} from "react-native-reanimated";
import Treat from "./Treat";

const ListOfArticles = ({header}) => {

    const colors = [ColorPalette.orange, ColorPalette.blue, ColorPalette.darkgrey, ColorPalette.darkgrey, ColorPalette.green,ColorPalette.darkOrange, ColorPalette.lightYellow];

    const articles = [
        {
            id:'1',
            title: "Let's make our workplaces sustainable",
            category:   "SUSTAINABILITY   •  article",
            url:"https://www.wwf.org.uk/updates/top-20-tips-workplaces-sustainable",
            color:colors[Math.floor(Math.random() * colors.length)]
        },
        {
            id:'2',
            title: "Cheap & easy tricks for reducing waste",
            category:"ZERO-WASTE  •  video",
            url:"https://www.youtube.com/watch?v=K9ojpJBSTw8",
            color:colors[Math.floor(Math.random() * colors.length)]
        },
        {
            id:'3',
            title: "20 Reasons to cycle to work",
            category:   "FITNESS  •  article",
            url:"https://www.cyclinguk.org/article/20-reasons-cycle-work",
            color:colors[Math.floor(Math.random() * colors.length)]
        },
        {
            id:'4',
            title: "Vegan recipes",
            category:   "NUTRITION  •  resource",
            url:"https://veganuary.com/recipes/",
            color:colors[Math.floor(Math.random() * colors.length)]
        },
        {
            id:'5',
            title: "Reducing your environmental footprint",
            category:   "SUSTAINABILITY  •  courses",
            url:"https://www.futurelearn.com/courses/collections/reducing-your-environmental-impact",
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
