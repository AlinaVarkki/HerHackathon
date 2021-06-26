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


const ActivityCard = ({activity, description, images}) => {

    let images1 = [require('../resources/images/1200px-React-icon.svg.png'), require('../resources/images/sketch1.png'), require('../Assets/tempProfilePic.png')]

    useEffect(() => {
        if (images.length > 4) {
            setBackgroundColor(ColorPalette.orange)
            setLock(true)
        }
    }, []);

    const [participants, setParticipants] = useState(images);
    const [buttonText, setButtonText] = useState("JOIN");
    const [backgroundColor, setBackgroundColor] = useState(ColorPalette.darkgrey);
    const [lock, setLock] = useState(false);

    const profileRender = ({item}) => (
        <RoundProfileImage
            image={item}
        />
    )

    //when pressed Join add Slavka to challenges participants

    const updateParticipant = () => {
        let submission = {
            activityName: activity,
            user: "Slavka"
        }
        activitiesApi.addParticipantToChallenge(submission).then(r => {
        })

        images.push(require(`../resources/Avatars/Slavka.png`))
        setParticipants(images)
        setButtonText("LEAVE")

        console.log("HEAR" + participants.length)
        if (participants.length > 3) {
            setBackgroundColor(ColorPalette.orange)
            setLock(true)
        }
    }

    return (
        <SafeAreaView>
            <View style={[{backgroundColor: backgroundColor}, styles.listing]}>
                <View style={styles.leftSection}>
                    { lock &&
                    <Text style={{color: 'white', paddingLeft: 20, paddingTop: 20, fontSize: 20, fontWeight: 'bold', opacity: 0.8}}>UNLOCKED</Text>
                    }
                    <View style={styles.leftUpper}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.textWhite}>{activity}</Text>
                        </View>
                        <Text style={styles.textWhiteLower}>{description}</Text>
                    </View>
                    <View style={styles.leftLower}>
                        <FlatList
                            data={participants}
                            keyExtractor={image => image.toString()}
                            renderItem={profileRender}
                            horizontal={true}
                        />
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 27}}>/5</Text>
                    </View>
                </View>
                <View style={styles.rightSection}>
                    <View style={styles.rightUpper}>
                        <Image style={{height: 110, width: 110, overflow: 'visible'}}
                               source={require('../resources/images/sketch1.png')}/>
                    </View>
                    <View style={styles.rightLower}>
                        <Pressable style={styles.joinButton} onPress={updateParticipant}>
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
        backgroundColor: '#FFF2D8',
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
