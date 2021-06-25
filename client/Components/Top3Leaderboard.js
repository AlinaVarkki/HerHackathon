import React from 'react';
import {Dimensions, StyleSheet, View} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import SquareLeaderboardBoi from "./SquareLeaderboardBoi";

const Top3Leaderboard = () => {

    return (
      <View style={styles.container}>

          <View style={styles.notLeader}>
              <SquareLeaderboardBoi title='2' photoURL={require('../Assets/tempProfilePic.png')} teamName='The Straths' points='200' color={ColorPalette.blue}/>
          </View>
          <SquareLeaderboardBoi title='1' photoURL={require('../Assets/tempProfilePic.png')} teamName='The Straths' points='200' color={ColorPalette.orange}/>
          <View style={styles.notLeader}>
            <SquareLeaderboardBoi title='3' photoURL={require('../Assets/tempProfilePic.png')} teamName='The Straths' points='200' color={ColorPalette.blue} />
          </View>
      </View>
    );

}

const {width} = Dimensions.get("screen");


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: width*0.4,
    },
    leader: {
    },
    notLeader: {
        paddingTop: width*0.05,
    }
});


export default Top3Leaderboard;
