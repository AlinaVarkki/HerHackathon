import React from 'react';
import {StyleSheet, View, Dimensions, Text} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import Goal from "./Goal";

const Goals = ({title, text, color}) => {
    return (
        <View>
            <Goal title={"CO2 emissions saved"} progress={50} label={"45kg"}/>
            <Goal title={"Kilometers waked"} progress={79} label={"78.7km"}/>

            <Goal title={"Waste Recycled"} progress={33} label={"50kg"}/>

        </View>


    );
};


const styles = StyleSheet.create({});

export default Goals;
