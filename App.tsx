import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import colors from './app/config/colors';
import ConvertScreen from './app/screens/ConvertScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';



export default function App()  {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <NativeRouter >
        <Switch >
        <Route exact path = '/' component={WelcomeScreen}></Route>
        <Route 
          exact path = '/convert/:conversion' 
          component={ConvertScreen}>
        </Route>
        </Switch>
        
      </NativeRouter>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
