import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'
import { useHistory } from 'react-router-native'
import Keypad from '../components/Keypad'
import colors from '../config/colors'
import { units } from '../config/conversions'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { useEffect } from 'react'

type Mode = 'light' | 'dark'


const WelcomeScreen = () => {
  const { getItem, setItem } = useAsyncStorage('mode')
  const [mode, setMode] = useState<Mode>('dark');

  const writeItemToStorage = async (newValue: Mode): 
    Promise<void> => {
      if(newValue) {
      await setItem(newValue);
      setMode(newValue);
      }
  }

  const readItemFromStorage = async (): Promise<void> => {
    const item = await getItem();
    const newMode = item || 'dark'; 
    setMode(newMode as Mode);
  }

  useEffect(() => {
    readItemFromStorage();
  },[])

  const history = useHistory()

  const keys = [...Object.keys(units), mode || 'dark']
  
  console.log(keys); 

  const handleTouch = (keyPress: string) => {
    if(keyPress === mode) writeItemToStorage(mode === 'light' ? 'dark' : 'light');
    else history.push(`/convert/${keyPress}`);
  }

  return (
    <View style={{backgroundColor: colors.background[mode]}} >
      <View style={[styles.top]} >
        <Text style={[styles.nameText, {color: colors.textMode[mode]}]} >ConverTron 5000</Text>
        <Icon  name={'compare-arrows'} size={120} color={colors.textMode[mode]}/>
      </View>
      <View style={styles.keypadOuter} >
        <Keypad
          mode={mode}
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
    // color: colors.grey.light,
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
