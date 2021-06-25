import React from 'react';
import {StyleSheet, View, Text} from "react-native";

const ProfilePageScreen = () => {

    return (
        <View style={styles.container}>
            <View screen={"profile"}>
                <Text style={{color: 'white'}}>profile screen</Text>
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

export default ProfilePageScreen;
