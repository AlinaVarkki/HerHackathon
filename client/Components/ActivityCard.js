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


const ActivityCard = ({activity, description, images }) => {

    let images1 = [require('../resources/images/1200px-React-icon.svg.png'), require('../resources/images/sketch1.png'), require('../Assets/tempProfilePic.png')]

    const [buttonText, setButtonText] = useState("JOIN");

    const [participants, setParticipants] = useState(images);
    const [backgroundColor, setBackgroundColor] = useState(ColorPalette.darkgrey);
    const [lock, setLock] = useState(false);
    const [buttonEnabled, setButtonEnabled] = useState(true);

    const [animationActive,setAnimationActive] = useState(false);

    useEffect(() => {
        if (images.length > 4) {
            setBackgroundColor(ColorPalette.orange)
        }
        let set = new Set(images)
        if(set.has(require(`../resources/Avatars/Slavka.png`))) {
            setButtonText('LEAVE')
            setButtonEnabled(false)
        }
    }, []);

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

        if(buttonText == "JOIN") {
            activitiesApi.addParticipantToChallenge(submission).then(r => {
            })

            images.push(require(`../resources/Avatars/Slavka.png`))
            setParticipants(images)
            setButtonText("LEAVE")

            if (participants.length > 3) {
                setBackgroundColor(ColorPalette.orange)
                setLock(true)
                setAnimationActive(true)
                setTimeout(function () {
                    setAnimationActive(false)
                }, 1400);

            }
            setButtonEnabled(false)
        } else {
            console.log("trying to remove");
            activitiesApi.removeParticipantFromChallenge(submission).then(r => {
            })

            images.pop()
            setParticipants(images)
            setButtonText("JOIN")
            setBackgroundColor(ColorPalette.darkgrey)
            setLock(false)
        }
    }

    if(animationActive) {
        return (
            <View style={[{backgroundColor: backgroundColor, alignItems: 'center', justifyContent: 'center',}, styles.listing]}>
                <Image style={{width: 130, height: 130}} source={{
                    uri: 'https://media.giphy.com/media/NBSn8OcMUaQZVd2yG4/giphy.gif'
                }}/>
            </View>
        )
    }else {
        return (
            <SafeAreaView>

                <View style={[{backgroundColor: backgroundColor}, styles.listing]}>
                    <View style={styles.leftSection}>
                        {lock &&
                        <Text style={{
                            color: 'white',
                            paddingLeft: 20,
                            paddingTop: 20,
                            fontSize: 20,
                            fontWeight: 'bold',
                            opacity: 0.8
                        }}>UNLOCKED</Text>
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
    }
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
