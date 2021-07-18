import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import ConvertScreen from './app/screens/ConvertScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';



export default function App()  {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <NativeRouter >
        <Switch >
        <Route exact path = '/' component={WelcomeScreen}></Route>
        <Route exact path = '/convert' component={ConvertScreen}></Route>
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
