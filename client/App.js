import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import activitiesApi from "../client/api/activitiesApi";

import MainNavigation from "./Navigation/MainNavigation";
import FullChallenge from "./views/FullChallenge";

export default function App() {

  return (
    <MainNavigation/>
    // <FullChallenge/>
  );
}



