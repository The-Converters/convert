import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import ConvertScreen from './app/screens/ConvertScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AboutScreen from './app/screens/AboutScreen';
type Mode = 'light' | 'dark'
type Params = {
  Welcome: undefined,
  Convert: {conversion: string},
  About: {mode: Mode}
}

const Stack = createNativeStackNavigator<Params>();

export default function App()  {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = "Welcome"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="Welcome"
          component={WelcomeScreen}/>
        <Stack.Screen 
          name="Convert"
          component={ConvertScreen}/>
        <Stack.Screen 
          name="About"
          component={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>   
  );
}
