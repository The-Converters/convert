import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Keypad from '../components/Keypad'

interface Props {
  measurement: number
}

//left code here for reference feel free to delete!

function MeasureScreen({ measurement=5 }: Props) {
  return (
   <SafeAreaView>
    <View style={styles.container} >
      <Text>{measurement}</Text>
      <View style={styles.keypadOuter} >
        <Keypad />
      </View>
    </View>
   </SafeAreaView>   
    
  )
}

const styles = StyleSheet.create({
  keypadOuter: {
   
  },
  container: {

  }
})

export default MeasureScreen
