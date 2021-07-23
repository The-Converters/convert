import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useHistory, useParams } from 'react-router-native'
import Keypad from '../components/Keypad'
import OptionsList from '../components/OptionsList';
import { convert } from '../utils/conversion';
import { units } from '../config/conversions';

const ConvertScreen: React.FC = () => {
  const history = useHistory()
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>('')
  const [showFromModal, setShowFromModal] = useState<boolean>(false)
  const [showToModal, setShowToModal] = useState<boolean>(false)
  const [convertFrom, setConvertFrom] = useState<string>('')
  const [convertTo, setConvertTo] = useState<string>('')
  const { conversion } = useParams<{ conversion: string }>()
  
  const optionsArr: string[] = Object.keys(units[conversion])

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
      setInput('')
      break;
    default:
      if(input=== '0') setInput(keyPress)
      else if(input === '-0') setInput('-' + keyPress)
      else setInput(input + keyPress)
    }
  }

  useEffect(()=>{
    if(!input) setOutput('')
    if(input && convertFrom && convertTo) setOutput(convert(conversion, convertFrom, convertTo, input))
    if(convertFrom === convertTo) setOutput(input)
    console.log(convertFrom, convertTo)
  },[input, convertFrom, convertTo])

  const keys = ["7", "8", "9", "menu", "4", "5", "6", "<", "1", "2", "3", "clr", ".", "0", "+/-", "home" ]

  
  return (
    <SafeAreaView>
    <View style={styles.container} >
      <View style={styles.input}>
        <Text style={styles.inputText} >{input}</Text>
        <TouchableOpacity 
          onPress={() => setShowFromModal(true)}
          style={styles.modalOpenOuter} 
        >
          <Text style={styles.modalOpen}>▽</Text>
        </TouchableOpacity>
        <Text style={styles.selection}>
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
      <View style={styles.input} >
        <Text style={styles.inputText}>{convertTo ? output : null}</Text>
        <TouchableOpacity 
          onPress={() => setShowToModal(true)}
          style={styles.modalOpenOuter} 
        >
          <Text style={styles.modalOpen}>▽</Text>
        </TouchableOpacity>
        <Text style={styles.selection}>
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

      <View style={styles.keypadOuter} >
        <Keypad 
        keys = {keys}
        handleTouch ={handleTouch }/>
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
  selection: {
    position: 'absolute',
    top: '72%',
    right: '5%',
    fontSize: 18
  },
  modalOpenOuter: {
    width: '20%',
    height: '50%'

  },
  modalOpen: {
    fontSize: 30,
    alignSelf: 'center'
  },
  keypadOuter: {
   flex: 1.5,
   width: '100%',
   alignSelf: 'center',
   marginTop: 40
  },
})

export default ConvertScreen
