import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useHistory } from 'react-router-native'
import Keypad from '../components/Keypad'
import { fahrenheitToCelsius } from '../utils/temp';
import options from '../config/options';
import OptionsList from '../components/OptionsList';

const ConvertScreen: React.FC = () => {
  const history = useHistory()
  const [input, setInput] = useState<string>('0')
  const [output, setOutput] = useState<string>('0')
  const [showFromModal, setShowFromModal] = useState<boolean>(false)
  const [showToModal, setShowToModal] = useState<boolean>(false)

  
  const handleTouch = (keyPress: string): void => {
  switch(keyPress) {
    case 'menu':
      history.push('/')
      break;
    case 'home':
        history.push('/')
        break;
    case '<' :
      setInput(input.slice(0,-1))
        break;
    case '+/-':
      setInput(input[0] === '-' ? input.slice(1) : '-'+input)
        break;
    case 'clr':
      setInput('0')
      break;
    default:
      if(input=== '0') setInput(keyPress)
      else if(input === '-0') setInput('-' + keyPress)
      else setInput(input + keyPress)
    }
  }

useEffect(()=>{
  setOutput(fahrenheitToCelsius(input))
},[input])
const keys = ["7", "8", "9", "menu", "4", "5", "6", "<", "1", "2", "3", "clr", ".", "0", "+/-", "home" ]

  const fromParams = 'temp'
  const optionOption: string[] = options[fromParams]
  
  return (
    <SafeAreaView>
    <View style={styles.container} >
      <View style={styles.input}>
        <Text style={styles.inputText} >{input}</Text>
        <TouchableOpacity 
          onPress={() => setShowFromModal(true)} 
        >
          <Text style={styles.modalOpen}>▽</Text>
        </TouchableOpacity>
      </View>
    {showFromModal &&
      <Modal 
        animationType={'fade'} 
        transparent={true}
      >
        <OptionsList 
          options={optionOption}
          handler={() => setShowFromModal(false)}
        />
      </Modal>
    }
      <View style={styles.input} >
        <Text style={styles.inputText} >{output}</Text>
        <TouchableOpacity 
          onPress={() => setShowToModal(true)} 
        >
          <Text style={styles.modalOpen}>▽</Text>
        </TouchableOpacity>
      </View>
    {showToModal &&
      <Modal 
        animationType={'fade'} 
        transparent={true}
      >
        <OptionsList 
          options={optionOption}
          handler={() => setShowToModal(false)}
          isModalB
        />
      </Modal>
    }

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
    flex: .5,
    alignSelf: 'center',
    paddingLeft: 10,
    width: 300,
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  inputText: {
    width: '100%',
    color: 'black',
    fontSize: 50, 
  },
  modalOpen: {
    fontSize: 20
  },
  keypadOuter: {
   flex: 1.5,
   width: '100%',
   alignSelf: 'center',
   marginTop: 40
  },
})

export default ConvertScreen
