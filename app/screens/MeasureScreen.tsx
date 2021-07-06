import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Keypad from '../components/Keypad'

interface Props {
  measurement: number
}

//left code here for reference feel free to delete!

function MeasureScreen({ measurement=5 }: Props) {
  return (
   <SafeAreaView>
    <View>
      <Text>{measurement}</Text>
      <Keypad />
    </View>
   </SafeAreaView>   
    
  )
}

export default MeasureScreen
