import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Text, Image,TouchableWithoutFeedback, Linking} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import Icon from "react-native-vector-icons/AntDesign";

const InspiringArticle = ({title, category, url, color}) => {

    const [heart, toggleHeart] = useState("hearto");

    return (

        <TouchableWithoutFeedback onPress={()=>Linking.openURL(url)}>
        <View style={styles.container}>
            <View style={{...styles.image, backgroundColor: color}}>
            </View>
            <View style={styles.texts}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.cat}>{category}</Text>
            </View>
            <View style={styles.icon}>
            <TouchableWithoutFeedback onPress={()=> {heart === "hearto" ? toggleHeart("heart") : toggleHeart("hearto")}}>
            <Icon name={heart} size={30} color={ColorPalette.offwhite}/>
            </TouchableWithoutFeedback>
            </View>

        </View>
        </TouchableWithoutFeedback>

    );

}

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomColor: ColorPalette.darkgrey,
        borderBottomWidth: 1,

    },
    image: {
        width: width*0.2,
        height: width*0.2,
        borderRadius: 20,

    },
    texts:{
        paddingHorizontal: 15,
        width: width*0.6,

},
    title:{
        color: ColorPalette.offwhite,
        fontSize: 20,
        fontWeight: 'bold'


    },
    cat:{
        color: ColorPalette.offwhite

    },
    icon:{
        justifyContent: 'center'
    }

});

export default InspiringArticle;
