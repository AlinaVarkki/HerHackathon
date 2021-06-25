import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, Button, Pressable, Image} from 'react-native';
import RoundProfileImage from "./RoundProfileImage";


const ActivityCard = ({children}) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.listing}>
                <View style={styles.leftSection}>
                    <View style={styles.leftUpper}>
                        <Text style={styles.textWhite}>Hike 100km</Text>
                        <Text style={styles.textWhiteLower}>Lorem ipsum.. I have no idea what is this</Text>
                    </View>
                    <View style={styles.leftLower}>
                        <RoundProfileImage image={require('../resources/images/1200px-React-icon.svg.png')}/>
                        <RoundProfileImage image={require('../resources/images/1200px-React-icon.svg.png')}/>
                        <RoundProfileImage image={require('../resources/images/1200px-React-icon.svg.png')}/>
                        <Text style={{color : 'white', fontWeight: 'bold', fontSize: 31}}>/5</Text>
                    </View>
                </View>
                <View style={styles.rightSection}>
                    <View style={styles.rightUpper}>
                        <Image style={{height: 110, width: 110, overflow: 'visible'}} source={require('../resources/images/sketch1.png')} />
                    </View>
                    <View style={styles.rightLower}>
                        <Pressable style={styles.joinButton}>
                            <Text style={styles.buttonText}>JOIN</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    textWhite: {
        paddingLeft: 20,
        paddingTop: 25,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19
    },textWhiteLower: {
        paddingLeft: 20,
        paddingTop: 5,
        color: 'white',
        fontSize: 16
    },
    listing: {
        flex: 1,
        backgroundColor: '#222222',
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
        paddingLeft: 17,
        overflow: 'visible',
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

export default ActivityCard;
