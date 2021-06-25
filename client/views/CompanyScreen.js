import React from 'react';
import {StyleSheet, View, Text} from "react-native";


const CompanyScreen = () => {

    return (
        <View style={styles.container}>
            <View screen={"company"}>
                <Text style={{color: 'white'}}>company screen</Text>
            </View>
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
