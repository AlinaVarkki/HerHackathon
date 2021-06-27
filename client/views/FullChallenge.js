import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback, Dimensions, FlatList, ScrollView, Image} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import ColorPalette from "../Assets/ColorPalette";
import Circle from "../Components/Circle";
import CompanyStats from "../Components/CompanyStats";
import RoundProfileImage from "../Components/RoundProfileImage";
import ProgressPart from "../Components/ProgressPart";
import {useNavigation} from "@react-navigation/native";
import Stories from "../Components/Stories";


const FullChallenge = ({route}) => {

    const [animationActive, setAnimationActive] = useState(false);

    const {activity, description, images, progress, date} = route.params;

    const navigation = useNavigation();

    useEffect(() => {
        if(animationActive) {
            setTimeout(function () {
                navigation.navigate("MainScreen", {screen: Math.random()})
            }, 3000);
        }
    })

    const goBack = () => {
        navigation.goBack();
    };

    //TODO switch these for database access
    const teammates = [
        {
            name: 'slavka',
            photo: require('../Assets/Avatars/Slavka.png')
        },
        {
            name: 'radina',
            photo: require('../Assets/Avatars/Radina.png')
        },
        {
            name: 'alina',
            photo: require('../Assets/Avatars/Alina.png')
        },
        {
            name: 'kathie',
            photo: require('../Assets/Avatars/Kathie.png')
        },
        {
            name: 'annie',
            photo: require('../Assets/Avatars/Annie.png')
        },
    ];

    const data = [
        {
            value: '20',
            text: 'completed challenges'
        },
        {
            value: '50',
            text: 'cool points'
        },
        {
            value: '80',
            text: 'something else'
        }
    ];

    const renderParticipant = ({item}) => (
        <View style={{marginHorizontal: width * 0.022}}>
            <RoundProfileImage image={item.photo} size={50}/>
        </View>
    )


    if (animationActive) {

        return (
            <View style = {{flex: 1, backgroundColor: ColorPalette.orange, alignItems: 'center', justifyContent: 'center',}}>
                <Text style={{color: 'white', fontSize: 34}}>+250 points</Text>
                <Text style={{color: 'white', fontSize: 34}}>Thank you!</Text>
                <Text style={{color: 'white', fontSize: 27, paddingBottom: 20}}>           - planet</Text>
                <Image style={{width: 340, height: 340}} source={{
                    uri: 'https://media.giphy.com/media/BemOCBWXzTAoqSgnBQ/giphy.gif'
                }}/>
            </View>
        )

    } else {

        return (
            <ScrollView style={styles.container}>
                <TouchableWithoutFeedback onPress={goBack}>
                    <Icon name={'arrowleft'} size={30} color={'white'}/>
                </TouchableWithoutFeedback>

                <View style={styles.content}>
                    <Text style={styles.title}>{activity}</Text>
                    <Text style={styles.description}>{description}</Text>

                    {progress === 100 ? <ProgressPart title={"Completed"} progress={progress} label={date}
                                                      color={ColorPalette.green}/> :
                        <ProgressPart title={""} progress={progress} label={"...almost there :)"}
                                      color={ColorPalette.green}/>
                    }


                    <Text style={styles.subtitle}>Participants</Text>
                    <View style={styles.participants}>
                        <FlatList
                            data={teammates}
                            renderItem={renderParticipant}
                            keyExtractor={item => item.name}
                            horizontal={true}
                        />
                    </View>


                    <Text style={styles.subtitle}>Challenge Contribution</Text>
                    <CompanyStats data={data}/>


                    {progress !== 100 &&
                    <View>
                        <Text style={styles.subtitle}>Update</Text>

                        <Stories/>
                    </View>


                    }


                </View>
                {progress !== 100 &&
                <TouchableWithoutFeedback onPress={
                    // () => navigation.navigate("MainScreen", {screen: Math.random()})
                    () => setAnimationActive(true)
                }>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>COMPLETE</Text>
                    </View>
                </TouchableWithoutFeedback>
                }

            </ScrollView>
        )
    }

};

const {width} = Dimensions.get("screen");


const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        backgroundColor: 'black',
        padding: 15,

    },
    content: {
        padding: 10,
    },

    title: {
        fontSize: 40,
        color: ColorPalette.offwhite,
        fontWeight: 'bold',

    },
    description: {
        fontSize: 17,
        color: ColorPalette.offwhite,
        marginBottom: 20,

    },
    subtitle: {
        fontSize: 25,
        color: ColorPalette.offwhite,
        fontWeight: 'bold',
        marginTop: 30,
    },
    participants: {
        width: '100%',
        marginTop: 7.5,

    },
    button: {
        backgroundColor: ColorPalette.orange,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        alignSelf: 'center',
        borderRadius: 25,
        marginBottom: 40,
    },
    buttonText: {
        color: ColorPalette.offwhite,
        fontWeight: 'bold',
        fontSize: 25,
        letterSpacing: 1.2
    }

});


export default FullChallenge;
