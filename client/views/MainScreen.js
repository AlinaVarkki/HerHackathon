import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import FeedScreen from "./FeedScreen";
import CompanyScreen from "./CompanyScreen";
import ProfilePageScreen from "./ProfilePageScreen";
import TeamScreen from "./TeamScreen";
import DiscoverScreen from "./DiscoverScreen";
import BottomMenuButton from "../Components/BottonMenuButton";
// import BottomMenuButton from "../Components/BottonMenuButton";


const MainScreen = () => {

    const [chosen, changeChosen] = useState("FeedScreen");

    const navigation = useNavigation();

    const content = () => {
        switch (chosen) {
            case "FeedScreen":
                return (<FeedScreen/>);

            case "CompanyScreen":
                return (<CompanyScreen/>);

            case "ProfilePageScreen":
                return (<ProfilePageScreen/>);

            case "TeamScreen":
                return (<TeamScreen/>);

            case "DiscoverScreen":
                return (<DiscoverScreen/>);

            default:
                return (<FeedScreen/>);

        }
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView style={styles.main}>
                {content()}
            </ScrollView>
            <View style={styles.bottom}>
                <View style={styles.row}>
                    <BottomMenuButton name="rocket1" text="home" callback={()=>changeChosen("FeedScreen")} style={styles.button}/>
                    <BottomMenuButton name="rocket1" text="team" callback={()=>changeChosen("TeamScreen")} style={styles.button}/>
                    <BottomMenuButton name="rocket1" text="company" callback={()=>changeChosen("CompanyScreen")} style={styles.button}/>
                    <BottomMenuButton name="rocket1" text="discover" callback={()=>changeChosen("DiscoverScreen")} style={styles.button}/>
                    <BottomMenuButton name="rocket1" text="profile" callback={()=>changeChosen("ProfilePageScreen")} style={styles.button}/>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        flex: 1,
        paddingTop:30,
        backgroundColor: 'black'
    },
    main: {
        height: '87.5%',
        paddingHorizontal: 20,
        backgroundColor: 'black'
    },
    bottom:{
        height: '12.5%',
        width: '100%',
        alignItems: 'center',

        borderTopWidth: 1,
        borderTopColor: 'grey'
    },
    row:{
        flex:1,
        flexDirection: 'row',
        paddingTop: 5,
    },
});

export default MainScreen;
