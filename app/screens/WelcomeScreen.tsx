import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'
import { useHistory } from 'react-router-native'
import Keypad from '../components/Keypad'
import colors from '../config/colors'
import { units } from '../config/conversions'


const WelcomeScreen = () => {
  
  const history = useHistory()

  const keys = Object.keys(units)
  
  console.log(keys); 

  const handleTouch = (keyPress: string) => {
    history.push(`/convert/${keyPress}`)
  }

  return (
    <View>
      <View style={styles.top} >
        <Text style={styles.nameText} >ConverTron 5000</Text>
        <Icon  name={'compare-arrows'} size={120} color={colors.grey.light}/>
      </View>
      <View style={styles.keypadOuter} >
        <Keypad
          conversion={'temp'} 
          keys={keys} 
          handleTouch={handleTouch} forHomeScreen/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    padding: '20%'
  },
  nameText: {
    alignSelf: 'center',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: '10%',
    color: colors.grey.light,
  },
  keypadOuter: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 40
   }, 
})

export default WelcomeScreen
