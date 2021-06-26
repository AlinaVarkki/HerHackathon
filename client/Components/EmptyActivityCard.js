import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Pressable,
    Image,
    SafeAreaView
} from 'react-native';
import RoundProfileImage from "./RoundProfileImage";
import activitiesApi from "../api/activitiesApi";
import ColorPalette from "../Assets/ColorPalette";


const EmptyActivityCard = ({activity, description}) => {

    const [buttonText, setButtonText] = useState("BE THE FIRST");

    const [buttonEnabled, setButtonEnabled] = useState(true);





    return (
        <SafeAreaView>
            <View style={[{backgroundColor: ColorPalette.darkgrey}, styles.listing]}>
                <View style={styles.leftSection}>
                    <View style={styles.leftUpper}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.textWhite}>{activity}</Text>
                        </View>
                        <Text style={styles.textWhiteLower}>{description}</Text>
                    </View>

                </View>
                <View style={styles.rightSection}>
                    <View style={styles.rightUpper}>
                        <Image style={{height: 110, width: 110, overflow: 'visible'}}
                               source={require('../resources/images/sketch1.png')}/>
                    </View>
                    <View style={styles.rightLower}>
                        <Pressable disabled={!buttonEnabled} style={styles.joinButton} onPress={()=>console.log("hello")}>
                            <Text style={styles.buttonText}>{buttonText}</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textWhite: {
        paddingLeft: 20,
        paddingTop: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19
    }, textWhiteLower: {
        paddingLeft: 20,
        paddingTop: 5,
        color: 'white',
        fontSize: 16
    },
    listing: {
        flex: 1,
        // backgroundColor: ColorPalette.darkgrey,
        overflow: 'visible',
        marginVertical: 10,
        width: '100%',
        height: 180,
        flexDirection: 'row',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        flexWrap: 'nowrap',

    },
    leftSection: {
        // flex: 4,
        width:'50%'

    }, rightSection: {
        width: '50%'
        // flex: 3,
    }, leftUpper: {
        // flex: 8,
        overflow: 'visible',
    },
    leftLower: {
        // flex: 5,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 17,
        overflow: 'visible',
    },
    rightUpper: {
        // flex: 8,
        alignItems: 'center',
        overflow: 'visible',
        flexWrap: 'nowrap',
        justifyContent: 'center',

    },
    rightLower: {
        // flex: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    joinButton: {
        backgroundColor: '#FFF2D8',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        elevation: 3,
        margin: 5,
    },
    buttonText: {
        color: '#FFAC00',
        fontWeight: 'bold',
        fontSize: 19
    }
})

export default EmptyActivityCard;
