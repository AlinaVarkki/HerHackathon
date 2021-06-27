import React from 'react';
import {StyleSheet, View, Dimensions, Text} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import Goal from "./Goal";

const Goals = () => {

    return (
        <View>
            <Goal title={"CO2 emissions saved"} progress={33} label={"44.3kg"}/>
            <Goal title={"Kilometers waked"} progress={79} label={"713km"}/>

            <Goal title={"Waste Recycled"} progress={66} label={"200kg"}/>

        </View>


    );
};


const styles = StyleSheet.create({});

export default Goals;
