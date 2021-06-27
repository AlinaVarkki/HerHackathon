import React from 'react';
import {StyleSheet, View, Dimensions, Text, Image, TouchableWithoutFeedback, Linking} from "react-native";
import ColorPalette from "../Assets/ColorPalette";

const Treat = ({title, category, points, photo}) => {

    return (
        <View style={{...styles.box}}>
            <View style={styles.background}>
                <Image style={styles.background} source={photo}/>
            </View>
                <Text style={styles.category}>{category}</Text>

                <Text style={styles.title}>{title}</Text>



                <View>
                    <Text style={styles.points}>{points} points</Text>
                    <TouchableWithoutFeedback onPress={()=>Linking.openURL("https://www.youtube.com/watch?v=VgojnNgmgVs")} disabled={points > 2000}>
                        <View style={{...styles.button, backgroundColor: points < 2000 ? ColorPalette.offwhite : '#A5A5A5'}}>

                            {points < 600 ?
                                <Text style={{...styles.buttonText, color:ColorPalette.darkgrey}}> ✓</Text> :
                                <Text style={{...styles.buttonText, color:ColorPalette.darkgrey}}>get</Text>}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            {/*</View>*/}

        </View>

    );

}

const {width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    box: {
        width: width*0.37,
        height: width*0.47,
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 7.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        paddingVertical: 15,
        backgroundColor: ColorPalette.orange,
        elevation:5,

    },
    background: {
        width: width*0.37,
        height: width*0.47,
        borderRadius: 20,
        position: 'absolute',
        overflow: 'hidden'

    },
    foreground:{

    },
    category:{
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontSize: 15,
        letterSpacing: 1.5,
        fontFamily: 'Roboto',
    },
    title:{
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontSize: 20,
        letterSpacing: 1.5,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },

    name:{
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    points: {
        color: ColorPalette.offwhite,
        textAlign: 'center',
        fontSize:15,
    },
    button: {
        // backgroundColor: ColorPalette.offwhite,
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 20,
        marginTop:7,
        elevation: 3,
    },
    buttonText: {
        fontSize:15,
        textAlign: 'center',
        // color: ColorPalette.darkgrey
    }

});

export default Treat;
