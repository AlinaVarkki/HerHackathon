import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Pressable,
    Image,
    SafeAreaView,
    Dimensions
} from 'react-native';

import ColorPalette from "../Assets/ColorPalette";
import RoundProfileImage from "./RoundProfileImage";
import activitiesApi from "../api/activitiesApi";
import BottonMenuButton from "./BottonMenuButton";
import BottomMenuButton from "./BottonMenuButton";
import Icon2 from "react-native-vector-icons/FontAwesome";


const StickingOutCard = ({activity, images=[], description, photo}) => {

    const [buttonText, setButtonText] = useState("JOIN");

    const [participants, setParticipants] = useState(images);
    const [backgroundColor, setBackgroundColor] = useState(ColorPalette.darkgrey);
    const [lock, setLock] = useState(false);
    const [buttonEnabled, setButtonEnabled] = useState(true);

    const [animationActive,setAnimationActive] = useState(false);

    useEffect(() => {
        if (images.length===0) {
            setButtonText('BE THE FIRST')
        } else {
            if (images.length > 4) {
                setBackgroundColor(ColorPalette.orange)
                setLock(true)
            }
            let set = new Set(images)
            if(set.has(require(`../resources/Avatars/Slavka.png`))) {
                setButtonText('LEAVE')
                setButtonEnabled(false)
            }
        }
    }, []);

    //when pressed Join add Slavka to challenges participants

    const updateParticipant = () => {
        let submission = {
            activityName: activity,
            user: "Slavka"
        }

        if(buttonText == "JOIN") {
            // activitiesApi.addParticipantToChallenge(submission).then(r => {
            // })

            images.push(require(`../resources/Avatars/Slavka.png`))
            setParticipants(images)
            setButtonText("LEAVE")

            if (participants.length > 3) {
                setBackgroundColor(ColorPalette.orange)
                setLock(true)
                setAnimationActive(true)
                setTimeout(function () {
                    setAnimationActive(false)
                }, 2000);

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

    const profileRender = ({item}) => (

        <View style={{paddingHorizontal: 2}}>
            <RoundProfileImage
                image={item}
                size={31}
            />
        </View>

    )


    if(animationActive) {
        return (
            <View style={[{backgroundColor: backgroundColor, alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}, styles.listing]}>
                <Image style={{width: 210, height: 210}} source={{
                    uri: 'https://media.giphy.com/media/PDyzRsDkBA9y4rDdBM/giphy.gif'
                }}/>
            </View>
        )
    }else {


        return (
            <View style={[{backgroundColor: backgroundColor}, styles.listing]}>

                <View style={styles.content}>
                    <View style={styles.texts}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline'}}>
                            <Text style={styles.textWhite}>{activity}</Text>
                            {lock &&
                            // <Text style={styles.unlocked}>UNLOCKED</Text>
                            // <BottomMenuButton font="Profile" name="rocket1" text=" " color={ColorPalette.offwhite}/>
                                <Icon2 name="unlock" size={30} color={ColorPalette.offwhite} style={{opacity: 0.8}}/>
                            }
                        </View>
                        <Text style={styles.textWhiteLower}>{description}</Text>
                    </View>

                    <View style={styles.image}>
                        <Image style={{height: width * 0.4, width: width * 0.4,}} source={photo}/>
                    </View>


                </View>

                <View style={styles.bottomPart}>

                    {(images.length !== 0) &&
                    <View style={styles.people}>
                        <FlatList
                            data={images}
                            keyExtractor={image => image.toString()}
                            renderItem={profileRender}
                            horizontal={true}

                        />
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 27}}>/5</Text>
                    </View>
                    }


                    <View style={styles.button}>
                        <Pressable style={styles.joinButton} onPress={updateParticipant}>
                            <Text style={styles.buttonText}>{buttonText}</Text>
                        </Pressable>
                    </View>
                </View>


            </View>

        );
    }
};

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    listing: {
        flex: 1,
        width: '100%',
        height: 190,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        flexWrap: 'nowrap',
        justifyContent:'space-between',
        marginVertical:15,
        // backgroundColor: ColorPalette.orange

    },
    content:{
        // justifyContent:'space-between'
        alignItems:'flex-end'


    },
    texts:{
        width: '57%',
        alignSelf:'flex-start',
        paddingTop: 20,
        // backgroundColor: 'green'
    },
    unlocked:{
        color:ColorPalette.offwhite,
        fontSize:17,
        letterSpacing:1.2,
        opacity:0.75,
    },
    image:{
        height: width*0.4,
        width: width*0.4,
        position:'absolute',
        marginTop: -40,
        paddingBottom:5,
        // backgroundColor:'yellow'

    },
    bottomPart:{
        paddingBottom: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'baseline',
        // backgroundColor:'red'
    },
    people:{
        // flex: 1,
        justifyContent:'flex-start',
        // backgroundColor:'green',
        flexDirection: 'row',
        width: '66%',
        marginRight:5

    },

    button:{
    },
    textWhite: {
        paddingLeft: 20,

        color: 'white',
        fontWeight: 'bold',
        fontSize: 19
    }, textWhiteLower: {
        paddingLeft: 20,
        paddingTop: 5,
        color: 'white',
        fontSize: 16
    },


    joinButton: {
        backgroundColor: '#FFF2D8',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
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

export default StickingOutCard;
