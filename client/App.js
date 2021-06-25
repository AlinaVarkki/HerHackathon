import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import activitiesApi from "../client/api/activitiesApi";
import ActivityCard from "./components/ActivityCard";
import Feed from "./components/Feed";
// import Screen from "./Components/Screen";

export default function App() {


  return (
    <View style={styles.container}>
        <Feed></Feed>
      {/*<Screen/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    height: '100%'
  },
});
