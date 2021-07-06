import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import MeasureScreen from './app/screens/MeasureScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';



export default function App()  {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <NativeRouter >
        <Switch >
        <Route exact path = '/' component={WelcomeScreen}></Route>
        <Route exact path = '/measure' component={MeasureScreen}></Route>
        </Switch>
        
      </NativeRouter>
      
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
