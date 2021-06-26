import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

interface Props {
  measurement: number
}

//left code here for reference feel free to delete!

function MeasureScreen({ measurement }: Props) {
  return (
   <SafeAreaView>
    <View>
      <Text>{measurement}</Text>
    </View>
   </SafeAreaView>   
    
  )
}

export default MeasureScreen
