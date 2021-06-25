import React from 'react';
import {Dimensions, StyleSheet, View, FlatList} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import SquareLeaderboardBoi from "./SquareLeaderboardBoi";
import StoriesBubble from "./StoriesBubble";
import NewStoryAdder from "./NewStoryAdder";

const Stories = () => {

    const stories = [{
        id: '0',
            title: 'First Item',
        photo: require('../Assets/tempProfilePic.png')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        photo: require('../Assets/tempProfilePic.png')

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        photo: require('../Assets/tempProfilePic.png')

    },{
            id: '58694a0f-3da1-471f-bd96-145571e29d7244',
            title: 'Third Item',
            photo: require('../Assets/tempProfilePic.png')

        },{
            id: '58694a0f-3da1-471f-bd96-145571e29d7442',
            title: 'Third Item',
            photo: require('../Assets/tempProfilePic.png')

        }];

    const renderStory = ({item}) => {
        if (item.id === '0') {
           return (
               <NewStoryAdder/>
           );

        } else {
            return (
                <StoriesBubble photo={item.photo} storyID={item.id}/>
            );
        }
    };

    return (
        <View style={styles.container}>

            <FlatList
                data={stories}
                renderItem={renderStory}
                keyExtractor={item => item.id}
                horizontal={true}

            />


        </View>
    );

}

const {width} = Dimensions.get("screen");


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: width*0.3,

    },

});


export default Stories;
