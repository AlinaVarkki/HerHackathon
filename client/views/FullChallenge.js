import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback, Dimensions, FlatList, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import ColorPalette from "../Assets/ColorPalette";
import Circle from "../Components/Circle";
import CompanyStats from "../Components/CompanyStats";
import RoundProfileImage from "../Components/RoundProfileImage";
import ProgressPart from "../Components/ProgressPart";



const FullChallenge = () => {

    const goBack = () => {
        //TODO add this to navigation and set up the back button + change the icon
    };

    //TODO switch these for database access
    const teammates = [
        {   name: 'slavka',
            photo: require('../Assets/Avatars/Slavka.png')
        },
        {   name: 'radina',
            photo: require('../Assets/Avatars/Radina.png')
        },
        {   name: 'alina',
            photo: require('../Assets/Avatars/Alina.png')
        },
        {   name: 'kathie',
            photo: require('../Assets/Avatars/Kathie.png')
        },
        {   name: 'annie',
            photo: require('../Assets/Avatars/Annie.png')
        },
    ];

    const renderParticipant = ({item}) => (
        <View style={{ marginHorizontal:width*0.022}}>
        <RoundProfileImage image={item.photo} size={50}/>
        </View>
    )


    return (
        <ScrollView style={styles.container}>
            <TouchableWithoutFeedback onPress={goBack}>
            <Icon name={'rocket1'} size={30} color={'white'}/>
            </TouchableWithoutFeedback>

            <View style={styles.content}>
                <Text style={styles.title}>Hike 100km</Text>
                <Text style={styles.description}>Lorem ipsum... I have no idea what is this</Text>

                <ProgressPart title={"Time Left"} progress={80} label={"2 days"} color={ColorPalette.blue}/>

                <Text style={styles.subtitle}>Participants</Text>
                <View style={styles.participants}>
                    <FlatList
                        data={teammates}
                        renderItem={renderParticipant}
                        keyExtractor={item =>item.id}
                        horizontal={true}
                    />
                </View>



                <Text style={styles.subtitle}>Challenge Contribution</Text>
                <CompanyStats/>



                <Text style={styles.subtitle}>Update</Text>



            </View>
            <TouchableWithoutFeedback >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>COMPLETE</Text>
                </View>
            </TouchableWithoutFeedback>

        </ScrollView>
    )

};

const {width} = Dimensions.get("screen");


const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        backgroundColor: 'black',
        padding:15,

    },
    content:{
        padding:10,
    },

    title: {
        fontSize: 40,
        color: ColorPalette.offwhite,
        fontWeight:'bold',

    },
    description: {
        fontSize: 17,
        color: ColorPalette.offwhite,
        marginBottom: 20,

    },
    subtitle: {
        fontSize: 25,
        color: ColorPalette.offwhite,
        fontWeight:'bold',
        marginTop: 30,
    },
    participants:{
        width:'100%',
        marginTop:7.5,

    },
    button:{
        backgroundColor: ColorPalette.orange,
        width: '80%',
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical: 10,
        alignSelf:'center',
        borderRadius: 25,
        marginBottom: 40,
    },
    buttonText:{
        color:ColorPalette.offwhite,
        fontWeight: 'bold',
        fontSize: 25,
        letterSpacing: 1.2
    }

});


export default FullChallenge;