import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import activitiesApi from "../client/api/activitiesApi";

import MainNavigation from "./Navigation/MainNavigation";

export default function App() {

  return (
    <MainNavigation/>
      // <Feed></Feed>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
});
