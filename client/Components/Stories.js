import React from 'react';
import {Dimensions, StyleSheet, View, FlatList} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import SquareLeaderboardBoi from "./SquareLeaderboardBoi";
import StoriesBubble from "./StoriesBubble";

const Stories = () => {

    const stories = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
    },{
            id: '58694a0f-3da1-471f-bd96-145571e29d7244',
            title: 'Third Item',
        },{
            id: '58694a0f-3da1-471f-bd96-145571e29d7442',
            title: 'Third Item',
        }];

    const renderStory = ({item}) => (
        <StoriesBubble/>
    );

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
        height: width*0.4,
    },
    leader: {
    },
    notLeader: {
        paddingTop: width*0.05,
    }
});


export default Stories;
