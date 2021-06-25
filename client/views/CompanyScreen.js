import React from 'react';
import {StyleSheet, View, Text} from "react-native";


const CompanyScreen = () => {

    return (
        <View style={styles.container}>
                <Text style={{color: 'white'}}>company screen</Text>
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
