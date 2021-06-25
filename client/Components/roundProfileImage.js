import React from 'react';
import {Image, View} from 'react-native';

export default function RoundProfileImage({size = 34, image}){
    return (
        <View style = {{width: size, height: size, justifyContent: 'center', alignItems: 'center', borderRadius: size / 2, overflow: 'hidden', margin:1.5}}>
            {/*<Icon name={iconName} size={size / 2} color={iconColor}/>*/}
            <Image size={size / 2} source={image}/>
        </View>
    );
}
