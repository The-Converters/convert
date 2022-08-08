import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Keypad from '../components/Keypad'
import OptionsList from '../components/OptionsList';
import { convert } from '../utils/conversion';
import { units } from '../config/conversions';
import colors from '../config/colors';
import { Params } from '../../types';

type Props = NativeStackScreenProps<Params, 'Convert'>
const ConvertScreen: React.FC <Props> = ({route, navigation}) => {
  const [input, setInput] = useState<string>('0')
  const [output, setOutput] = useState<string>('0')  
  const [showFromModal, setShowFromModal] = useState<boolean>(false)
  const [showToModal, setShowToModal] = useState<boolean>(false)
  const [convertFrom, setConvertFrom] = useState<string>('')
  const [convertTo, setConvertTo] = useState<string>('')
  const { conversion, mode } = route.params
  const optionsArr: string[] = Object.keys(units[conversion])
  
  const handleTouch = (keyPress: string): void => {
  switch(keyPress) {
    case 'about':
      navigation.navigate(`About`, {mode: mode})
      break;
    case 'home':
      navigation.navigate('Welcome')
      break;
    case 'back':
      setInput((input[0] === '-' && input.length === 2) ? '0' : input.slice(0,-1))
      break;
    case '+/-':
      setInput(input[0] === '-'  ? input.slice(1) : '-'+input)
      break;
    case 'clr':
      setInput('0')
      break;
    case '.':
      setInput(input.includes('.')
        ? input
        : input+keyPress)
      break;
    default:
      if(input=== '0') setInput(keyPress)
      else if(input === '-0') setInput('-' + keyPress)
      else setInput(input + keyPress)
    }
  }

  useEffect(()=>{
    if(input && convertFrom && convertTo) setOutput(convert(conversion, convertFrom, convertTo, input))
  },[input, convertFrom, convertTo])

  const keys: string[] = ["7", "8", "9", "about", "4", "5", "6", "back", "1", "2", "3", "clr", ".", "0", "+/-", "home" ]

  return (
    <View>
      <View style={[styles.container, {backgroundColor: colors.background[mode]}]} >
        <View style={styles.topBox}>
        <View style={[{borderBottomColor: colors.textMode[mode]}, styles.input]}>
          <Text style={[{color: colors.textMode[mode]}, styles.inputText]} >{input}</Text>
          <TouchableOpacity 
            onPress={() => setShowFromModal(true)}
            style={styles.modalOpenOuter} 
          >
            <Text style={[{color: colors.textMode[mode]}, styles.modalOpen]}>▽</Text>
          </TouchableOpacity>
          <Text style={[{color: colors.textMode[mode]}, styles.selection]}>
            {convertFrom ? convertFrom : 'select'}
          </Text>
        </View>
        {showFromModal &&
          <Modal 
            animationType={'fade'} 
            transparent={true}

          >
            <OptionsList 
              options={optionsArr}
              handler={(option: string) => {
                setConvertFrom(option)
                setShowFromModal(false)
                
              }}
            />
          </Modal>
        }
        <View style={[{borderBottomColor: colors.textMode[mode]}, styles.input]} >
          <Text style={[{color: colors[conversion].light}, styles.inputText]}>{convertTo ? output : null}</Text>
          <TouchableOpacity 
            onPress={() => setShowToModal(true)}
            style={styles.modalOpenOuter} 
          >
            <Text style={[{color: colors.textMode[mode]}, styles.modalOpen]}>▽</Text>
          </TouchableOpacity>
          <Text style={[{color: colors.textMode[mode]}, styles.selection]}>
            {convertTo ? convertTo : 'select'}
          </Text>
        </View>
        {showToModal &&
          <Modal 
            animationType={'fade'} 
            transparent={true}
          >
            <OptionsList 
              options={optionsArr}
              handler={(option: string) => {
                setConvertTo(option)
                setShowToModal(false)
                
              }}
              isModalB
            />
          </Modal>
        }

        </View>

        <View style={styles.keypadOuter} >
          <Keypad
          mode={mode}
          conversion={conversion} 
          keys = {keys}
          handleTouch ={handleTouch }/>
        </View>
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  topBox: {
    height: '45%',
    width: '100%',
    marginBottom: '5%'
  },
  input: {
    flex: .5,
    alignSelf: 'center',
    paddingLeft: 10,
    paddingBottom: 0,
    height: '50%',
    width: '85%',
    borderBottomWidth: 3,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  inputText: {
    width: '100%',
    fontSize: 50, 
    marginBottom: 10
  },
  selection: {
    position: 'absolute',
    top: '105%',
    right: '5%',
    fontSize: 18
  },
  modalOpenOuter: {
    width: '20%',
    height: '50%',
    marginBottom: 10
  },
  modalOpen: {
    fontSize: 30,
    alignSelf: 'center'
  },
  keypadOuter: {
    flex: 1.5,
    width: '100%',
    maxHeight: '50%',
    alignSelf: 'center',
    marginTop: 40
  },
})

export default ConvertScreen
