import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, FlatList, Button, Pressable, Image, Dimensions} from 'react-native';
import RoundProfileImage from "./RoundProfileImage";
import {ProgressBar} from "react-native-web";
import ProgressPart from "./ProgressPart";
import ColorPalette from "../Assets/ColorPalette";


const CompletedChallenge = ({activity, date, images}) => {

    const profileRender = ({item}) => (

        <View style={{paddingHorizontal:2.5}}>
            <RoundProfileImage
                image={item}
                size={31}
            />
        </View>

    )

    return (
        <TouchableWithoutFeedback>
            <View style={styles.listing}>
                <View style={styles.leftSection}>
                    <View style={styles.leftUpper}>
                        <Text style={styles.textWhite}>{activity}</Text>
                        <ProgressPart title={"Completed"} progress={100} color={ColorPalette.orange} label={date}/>
                    </View>
                    <View style={styles.leftLower}>
                        <FlatList
                            data = {images}
                            keyExtractor={image => image.toString()}
                            renderItem={profileRender}
                            horizontal={true}

                        />
                    </View>
                </View>
                <View style={styles.rightSection}>
                    <View style={styles.rightUpper}>
                        <Image style={{height: 110, width: 110, overflow: 'visible'}} source={require('../resources/images/sketch1.png')} />
                    </View>
                    <View style={styles.rightLower}>

                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    textWhite: {
        // paddingLeft: 20,
        paddingTop: 25,
        paddingBottom: 15,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 21
    },
    listing: {
        flex: 1,
        backgroundColor: ColorPalette.darkgrey,
        overflow: 'visible',
        marginTop: 20,
        width: '100%',
        height: 180,
        flexDirection: 'row',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        flexWrap: 'nowrap'
    },
    leftSection: {
        flex: 4,
        paddingLeft: 25,



    }, rightSection: {
        flex: 3,
    }, leftUpper: {
        flex: 8,
        overflow: 'visible',
    },
    leftLower: {
        flex: 5,
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'visible',
        width: '100%',



    },
    rightUpper: {
        flex: 8,
        alignItems: 'center',
        overflow: 'visible',
        flexWrap: 'nowrap',
        justifyContent: 'center',

    },
    rightLower: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    joinButton: {
        backgroundColor : '#FFF2D8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 9,
        borderRadius: 20,
        elevation: 3,
        width: '70%'
    },
    buttonText: {
        color: '#FFAC00',
        fontWeight: 'bold',
        fontSize: 19
    }
})

export default CompletedChallenge;
