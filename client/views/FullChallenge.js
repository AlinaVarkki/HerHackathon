import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback, Dimensions, FlatList, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import ColorPalette from "../Assets/ColorPalette";
import Circle from "../Components/Circle";
import CompanyStats from "../Components/CompanyStats";
import RoundProfileImage from "../Components/RoundProfileImage";
import ProgressPart from "../Components/ProgressPart";
import {useNavigation} from "@react-navigation/native";




const FullChallenge = ({route}) => {

    const { activity, description, images, progress, date} = route.params;

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
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
        <View style={{ marginHorizontal:width*0.022}}>
        <RoundProfileImage image={item.photo} size={50}/>
        </View>
    )


    return (
        <ScrollView style={styles.container}>
            <TouchableWithoutFeedback onPress={goBack}>
            <Icon name={'arrowleft'} size={30} color={'white'}/>
            </TouchableWithoutFeedback>

            <View style={styles.content}>
                <Text style={styles.title}>{activity}</Text>
                <Text style={styles.description}>{description}</Text>

                { progress === 100 ?  <ProgressPart title={"Completed"} progress={progress} label={date} color={ColorPalette.green}/> :
                    <ProgressPart title={""} progress={progress} label={"You're almost there :)"} color={ColorPalette.green}/>
                }


                <Text style={styles.subtitle}>Participants</Text>
                <View style={styles.participants}>
                    <FlatList
                        data={teammates}
                        renderItem={renderParticipant}
                        keyExtractor={item =>item.name}
                        horizontal={true}
                    />
                </View>



                <Text style={styles.subtitle}>Challenge Contribution</Text>
                <CompanyStats data={data}/>



                { progress !== 100 && <Text style={styles.subtitle}>Update</Text>}




            </View>
            { progress !== 100 &&
            <TouchableWithoutFeedback >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>COMPLETE</Text>
                </View>
            </TouchableWithoutFeedback>
            }

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
