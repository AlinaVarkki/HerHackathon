import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableWithoutFeedback, View,Text,TextInput} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import ColorPalette from "../Assets/ColorPalette";


const LoginScreen  = () => {
    // const navigation = useNavigation();


    const [email, onChangeEmail] = useState(null);
    const [password, onChangePassword] = useState(null);
    const [errorMessage, changeErrorMessage] = useState('');


    const loginCheck = () => {
        console.log(email);
        console.log(password);
        if (email == null || password == null) {

            alert('All fields need to be filled out.');
        } else {
            //TODO: get the data from database to check against
            //TODO: figure out how we're getting data from the database
            //TODO: check whether the entry was correct

        }
    };

    const goBack = () => {
        //TODO add this to navigation and set up the back button + change the icon
    };

    const emailChange = (input) => {

    }

    const passwordChange = (input) => {

    }



    return (
        <View style={styles.container}>

            <View>
                <TouchableWithoutFeedback onPress={goBack}>
                    <Icon name={'rocket1'} size={30} color={'white'}/>
                </TouchableWithoutFeedback>

                <View style={styles.title}>
                <Text style={styles.titleText}>Hello, Welcome Back</Text>
                </View>
            </View>

            <View style={{ paddingBottom:50}}>
                <View style={styles.inputBox}>
                    <Icon name={'rocket1'} size={25} color={ColorPalette.offwhite} style={{paddingRight: 30}}/>
                <TextInput
                    style={styles.inputField}
                    onChangeText={emailChange}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor={ColorPalette.offwhite}
                    keyboardType={'email-address'}
                    autoCompleteType={'email'}
                />
                </View>
                <View style={styles.inputBox}>
                    <Icon name={'rocket1'} size={25} color={ColorPalette.offwhite} style={{paddingRight: 30}}/>

                <TextInput
                    style={styles.inputField}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor={ColorPalette.offwhite}
                    autoCompleteType={'password'}
                    secureTextEntry={true}
                />
                </View>
                <View style={styles.forgotPassword}>
                    <Text style={styles.text}>Forgot password?</Text>
                </View>
            </View>

            <View>
                <Text style={styles.error}>{errorMessage}</Text>
                <TouchableWithoutFeedback onPress={loginCheck}>
                    <View style={styles.button}>
                        <Text  style={styles.buttonText}>Login</Text>
                    </View>

                </TouchableWithoutFeedback>
            </View>

        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        backgroundColor: 'black',
        padding:15,
        justifyContent: 'space-between'
    },
    title: {
        width:'75%',
        paddingTop: 10,
    },
    titleText: {
        color: ColorPalette.offwhite,
        fontSize: 50,
        fontWeight: 'bold'
    },
    inputBox: {
        height: 60,
        borderRadius: 30,
        margin: 10,
        paddingHorizontal: 30,
        justifyContent:'flex-start',
        backgroundColor: ColorPalette.darkgrey,
        flexDirection: 'row',
        alignItems:'center'

    },
    inputField: {
        color: ColorPalette.offwhite,

        fontSize: 17,
    },
    forgotPassword: {
        alignItems:'flex-end',
        paddingHorizontal: '10%',
    },
    text:{
        color:ColorPalette.offwhite,
        fontSize:15,

    },
    button:{
        height: 60,
        borderRadius: 30,
        margin: 10,
        paddingHorizontal: 30,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: ColorPalette.offwhite,


    },
    buttonText:{
        color:ColorPalette.darkgrey,
        fontSize:18,
        fontWeight: 'bold'
    },
    error: {
        color:ColorPalette.orange,
        fontSize:15,
        fontStyle:'italic'
    }
});

export default LoginScreen;
