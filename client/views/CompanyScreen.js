import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import Screen from "../Components/Screen";
import {useNavigation} from "@react-navigation/native";

const CompanyScreen = () => {

    return (
        <View style={styles.container}>
            <Screen screen={"company"}>
                <Text style={{color: 'white'}}>company screen</Text>
            </Screen>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
});

export default CompanyScreen;
