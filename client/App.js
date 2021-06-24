import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import activitiesApi from "../client/api/activitiesApi";
import Screen from "./Components/Screen";
import FeedScreen from "./views/FeedScreen";

export default function App() {

    const state = {
        myText: 'My Original Text'
    }

    // const updateText = () => {
    //     this.setState({myText: 'My Changed Text'})
    // }

  const onPressLearnMore = async() => {
    console.log("yesnow");
    await activitiesApi.getActivities().then(r => {
      console.log(r.data);
      // updateText()
    })
  }

  return (
    <FeedScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
});
