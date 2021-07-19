import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useHistory } from 'react-router-native'
import Keypad from '../components/Keypad'


const WelcomeScreen = () => {
  
  const history = useHistory()

  const keys = ['temp', 'distance']

  const handleTouch = (keyPress: string) => {
    console.log(keyPress)
    history.push(`/convert/${keyPress}`)
  }

  return (
    <View>
      <View style={styles.top}>
        <Text>WTF</Text>
        <TouchableOpacity onPress = {()=>history.push('/convert')}><Text>Do Something</Text></TouchableOpacity>
      </View>
      <View style={styles.keypadOuter} >
        <Keypad keys={keys} handleTouch={handleTouch} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    flex: 1
  },
  keypadOuter: {
    flex: 1.5,
    width: '100%',
    alignSelf: 'center',
    marginTop: 40
   },
})

export default WelcomeScreen
