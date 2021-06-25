import React from 'react';
import {Image, View} from 'react-native';

export default function RoundProfileImage({size = 29, image, borderRadium = size / 2}){
    return (
        <View style = {{width: size, height: size, justifyContent: 'center', alignItems: 'center', borderRadius: borderRadium, overflow: 'hidden', margin:1.5}}>
            <Image size={size / 2} source={image}/>
        </View>
    );
}
