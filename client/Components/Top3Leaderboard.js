import React from 'react';
import {Dimensions, StyleSheet, View} from "react-native";
import ColorPalette from "../Assets/ColorPalette";
import SquareLeaderboardBoi from "./SquareLeaderboardBoi";

const Top3Leaderboard = () => {

    const teams = [
        {
            name: "The Straths",
            position: "1",
            photo: require('../Assets/Teams/Artboard2-1.png'),
            points: "1938",
        },{
            name: "Team T",
            position: "2",
            photo: require('../Assets/Teams/Artboard1-1.png'),
            points: "1745",
        },{
            name: "Envi-heroes",
            position: "3",
            photo: require('../Assets/Teams/Artboard44.png'),
            points: "1333",
        }
    ]

    return (
      <View style={styles.container}>

          <View style={styles.notLeader}>
              <SquareLeaderboardBoi title={teams[1].position} photoURL={teams[1].photo} teamName={teams[1].name} points={teams[1].points} color={ColorPalette.orange}/>
          </View>
          <SquareLeaderboardBoi title={teams[0].position} photoURL={teams[0].photo} teamName={teams[0].name} points={teams[0].points} color={ColorPalette.green}/>
          <View style={styles.notLeader}>
              <SquareLeaderboardBoi title={teams[2].position} photoURL={teams[2].photo} teamName={teams[2].name} points={teams[2].points} color={ColorPalette.blue}/>
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
