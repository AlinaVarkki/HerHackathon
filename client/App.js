import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import activitiesApi from "../client/api/activitiesApi";

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
    <View style={styles.container}>
      <Text>Open up App.js to start working on your awtwwp!</Text>
        <Text>{state.myText}</Text>
      <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
