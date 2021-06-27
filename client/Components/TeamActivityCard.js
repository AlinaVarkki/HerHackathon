import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Pressable,
    Image,
    SafeAreaView,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';

import ColorPalette from "../Assets/ColorPalette";
import RoundProfileImage from "./RoundProfileImage";
import activitiesApi from "../api/activitiesApi";
import ProgressPart from "./ProgressPart";
import {useNavigation} from "@react-navigation/native";


const TeamActivityCard = ({activity, description="", photo, progress, compData, date=""}) => {

    const navigation = useNavigation();

    const images = [
        require('../Assets/Avatars/Slavka.png'),
        require('../Assets/Avatars/Alina.png'),
        require('../Assets/Avatars/Radina.png'),
        require('../Assets/Avatars/Sophie.png'),
        require('../Assets/Avatars/Kathie.png'),
    ]

    const images1 = [
        {
            id:'1',
            image:  require('../Assets/Avatars/Slavka.png'),
        },
        {
            id:'2',
            image:  require('../Assets/Avatars/Kathie.png'),
        },
        {
            id:'3',
            image:  require('../Assets/Avatars/Sophie.png'),
        },
        {
            id:'4',
            image:  require('../Assets/Avatars/Radina.png'),
        },
        {
            id:'5',
            image:require('../Assets/Avatars/Alina.png'),

        },

    ]

    const profileRender = ({item}) => (

        <View style={{paddingHorizontal: 2.5}}>
            <RoundProfileImage
                image={item.image}
                size={31}
            />
        </View>

    )

    const openChallenge = () => {
        const data = {
            activity:activity,
            description:description,
            images: images,
            progress:progress,
            date: date,
            compData: compData
        }
        navigation.navigate("FullChallenge", data);

    }


    return (
        <TouchableWithoutFeedback onPress={openChallenge}>
        <View style={[{backgroundColor:progress === 100? ColorPalette.darkgrey : ColorPalette.orange}, styles.listing]}>

            <View style={styles.content}>
                <View style={styles.texts}>
                    <Text style={styles.textWhite}>{activity}</Text>
                    {   (progress === 100) ?
                        <View style={{paddingTop:10}}>
                            <ProgressPart title={"Completed"} progress={100} color={ColorPalette.orange} label={date}/>
                        </View>
                    :
                        <Text style={styles.textWhiteLower}>{description}</Text>
                    }

                </View>

                <View style={styles.image}>
                    <Image style={{height: width*0.4, width: width*0.4,}}
                           source={photo}/>
                </View>


            </View>

            {/*<View style={styles.bottomPart}>*/}


            {/*    <View style={styles.people}>*/}
            {/*        <FlatList*/}
            {/*            data = {images1}*/}
            {/*            keyExtractor={image => image.id}*/}
            {/*            renderItem={profileRender}*/}
            {/*            horizontal={true}*/}

            {/*        />*/}

            {/*    </View>*/}


            {/*</View>*/}

        </View>
            </TouchableWithoutFeedback>


            );
};

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    listing: {
        flex: 1,
        width: '100%',
        height: 125,
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
        paddingLeft: 20,
        // backgroundColor: ColorPalette.orange


    },
    unlocked:{
        color:ColorPalette.offwhite,
        fontSize:17,
        letterSpacing:1.2,
        opacity:0.75

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
        width: '100%',
        padding:3,


    },

    button:{

    },
    textWhite: {

        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,

    }, textWhiteLower: {
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

export default TeamActivityCard;
