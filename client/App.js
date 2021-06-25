import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import activitiesApi from "../client/api/activitiesApi";

import MainNavigation from "./Navigation/MainNavigation";

export default function App() {

    const state = {
        myText: 'My Original Text'
    }

  const onPressLearnMore = async() => {
    console.log("yesnow");
    await activitiesApi.getActivities().then(r => {
      console.log(r.data);
      // updateText()
    })
  }


  return (
    <MainNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
});
