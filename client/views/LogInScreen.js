import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';


const LoginScreen  = () => {
    const navigation = useNavigation();

    const [data, setData] = React.useState({
        password: '',
        username: '',
        secureTextEntry: true,
    });

    const passwordChange = (input) => {
        setData({
            ...data,
            password: input,
        });
    };

    const usernameChange = (input) => {
        setData({
            ...data,
            username: input,
        });
    };

    const update = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };

    const forgot = () => {
        alert('For Aesthetic Design Purpose');
    };

    const loginCheck = () => {
        if (data.username === '' || data.password === '') {
            alert('All fields need to be filled out.');
        } else {
            //TODO: get the data from database to check against
            //TODO: figure out how we're getting data from the database
            //TODO: check whether the entry was correct

        }
    };

    return (
        <View style={styles.container}>


        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        backgroundColor: 'black',
        padding:15,

    },
});

export default LoginScreen;
