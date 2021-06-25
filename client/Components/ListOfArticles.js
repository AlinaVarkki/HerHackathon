import React from 'react';
import {StyleSheet, View, Dimensions, Text, Image,TouchableWithoutFeedback} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import InspiringArticle from "./InspiringArticle";

const ListOfArticles = () => {

    return (
        <View>
            <InspiringArticle title={"Something Inspiring Like for Real"} category={"ZERO-WASTE"} url={"https://www.youtube.com/watch?v=VgojnNgmgVs"} color={ColorPalette.orange}/>
            <InspiringArticle title={"Something Inspiring Like for Real"} category={"ZERO-WASTE"} url={"https://www.youtube.com/watch?v=VgojnNgmgVs"} color={ColorPalette.blue}/>
            <InspiringArticle title={"Something Inspiring Like for Real"} category={"ZERO-WASTE"} url={"https://www.youtube.com/watch?v=VgojnNgmgVs"} color={ColorPalette.darkgrey}/>

        </View>
    );

}

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({

});

export default ListOfArticles;
