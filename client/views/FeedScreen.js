import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableWithoutFeedback} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Feed from "../Components/Feed";
import HorizontalMenu from "../Components/HorizontalMenu";
import ColorPalette from "../Assets/ColorPalette";
import EmptyFeed from "../Components/EmptyFeed";

const FeedScreen = () => {

    const [selected,changeSelected] = useState('1');
    const [cat,changeCat] = useState("APPROVED");

    const items=[
        {
            id: '1',
            name: 'APPROVED',
        },
        {
            id: '2',
            name: 'FITNESS',
        },
        {
            id: '3',
            name: 'RECYCLING',
        },
        {
            id: '4',
            name: 'ZERO-WASTE',

        },
        {
            id: '5',
            name: 'VOLUNTEER',
        }]

    const renderCategories = ({item}) => {
        if (item.id === selected) {
            return (
                <TouchableWithoutFeedback onPress={() => switchCats(item)}>
                    <Text style={styles.optionSelected}>{item.name}</Text>
                </TouchableWithoutFeedback>
            );

        } else {
            return (
                <TouchableWithoutFeedback onPress={() => switchCats(item)}>
                    <Text style={styles.option}>{item.name}</Text>
                </TouchableWithoutFeedback>
            )

        }
    }

    const switchCats = (item) => {
        changeSelected(item.id);
        changeCat(item.name)
    };


        return (
            <View style={styles.container}>
                <View style={styles.upperPart}>
                    <Text style={styles.whiteBigText}>Hello Slavka</Text>
                    <Text style={styles.whiteText}>Pick your next challenge </Text>

                    <FlatList
                        data={items}
                        renderItem={renderCategories}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        style={{paddingLeft:10}}

                />
            </View>
            <View style={styles.lowerPart}>
                { selected!=='1' ?  <EmptyFeed category={cat}/> : <Feed/> }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width:'100%',
        backgroundColor: 'black',

    },
    whiteBigText: {
        paddingLeft: 20,
        // paddingTop: 25,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    whiteText: {
        paddingLeft: 20,
        paddingBottom: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    upperPart: {

    },
    lowerPart: {
        flex:1,
    },
    option: {
        color: 'white',
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        margin: 7,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',


    },
    optionSelected: {
        color: ColorPalette.darkOrange,
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: ColorPalette.lightYellow,
        margin: 7,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FeedScreen;
