import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Keypad from '../components/Keypad'

interface Props {
  measurement: number
}

//left code here for reference feel free to delete!

function MeasureScreen({ measurement=5 }: Props) {

const handleTouch = (keyPress: string): void => {
  console.log(keyPress)
}
const keys = ["7", "8", "9", "<", "4", "5", "6", "clr", "1", "2", "3", "go", ".", "0", "+/-", "home" ]
  return (
   <SafeAreaView>
    <View style={styles.container} >
      <View style={styles.input}>
        <Text style={styles.inputText} >from</Text>
      </View>
      <View style={styles.input} >
        <Text style={styles.inputText} >to</Text>
      </View>

      <Text>{measurement}</Text>
      <View style={styles.keypadOuter} >
        <Keypad 
        keys = {keys}
        handleTouch ={
           handleTouch }/>
      </View>
    </View>
   </SafeAreaView>   
    
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%'
  },
  input: {
    flex: 1,
    alignSelf: 'flex-start',
    paddingLeft: 10
  },
  inputText: {
   color: 'black',
   fontSize: 50, 
  },
  keypadOuter: {
   flex: 2,
   width: '100%',
   alignSelf: 'center'
  },
})

export default MeasureScreen
