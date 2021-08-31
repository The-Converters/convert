import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import ConvertScreen from './app/screens/ConvertScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

type Params = {
  Welcome: undefined,
  Convert: {conversion: string}
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
      </Stack.Navigator>
    </NavigationContainer>   
  );
}
