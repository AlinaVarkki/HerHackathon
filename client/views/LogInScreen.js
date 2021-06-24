import React from 'react';
import {useNavigation} from '@react-navigation/native';


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


}

export default LoginScreen;
