import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import FeedScreen from "./FeedScreen";
import CompanyScreen from "./CompanyScreen";
import ProfilePageScreen from "./ProfilePageScreen";
import TeamScreen from "./TeamScreen";
import DiscoverScreen from "./DiscoverScreen";
import BottomMenuButton from "../Components/BottonMenuButton";
import ColorPalette from "../Assets/ColorPalette";


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
                return (<TeamScreen navigation={navigation}/>);

            case "DiscoverScreen":
                return (<DiscoverScreen/>);

            default:
                return (<FeedScreen/>);

        }
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.main}>
                {content()}
            </View>
            <View style={styles.bottom}>
                <View style={styles.row}>
                    <BottomMenuButton font="Logo" name="menu" text="home" callback={()=>changeChosen("FeedScreen")} color={chosen === "FeedScreen" ? ColorPalette.green : ColorPalette.offwhite} style={styles.button}/>
                    <BottomMenuButton font="Ionicons" name="people-outline" text="team" callback={()=>changeChosen("TeamScreen")} color={chosen === "TeamScreen" ? ColorPalette.green : ColorPalette.offwhite} style={styles.button}/>
                    <BottomMenuButton font="AntDesign" name="home" text="company" callback={()=>changeChosen("CompanyScreen")} color={chosen === "CompanyScreen" ? ColorPalette.green : ColorPalette.offwhite} style={styles.button}/>
                    <BottomMenuButton font="AntDesign" name="rocket1" text="discover" callback={()=>changeChosen("DiscoverScreen")} color={chosen === "DiscoverScreen" ? ColorPalette.green : ColorPalette.offwhite} style={styles.button}/>
                    <BottomMenuButton font="Profile" name="rocket1" text="profile" callback={()=>changeChosen("ProfilePageScreen")} color={chosen === "ProfilePageScreen" ? ColorPalette.green : ColorPalette.offwhite} style={styles.button}/>
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
        backgroundColor: 'black'
    },
});

export default MainScreen;
