import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  keys: string[],
  handleTouch: (key: string) => void
}

const Keypad: React.FC<Props> = ({keys, handleTouch}) => {
  const keyTouchElements = keys.map((key, index) => (
    <TouchableOpacity
          key={index} 
            style={styles.btnOuter} 
            onPress={()=>handleTouch(key)}>
              <Text style={styles.btn}>{key}</Text>
          </TouchableOpacity>
  ));
  return (
    <SafeAreaView>
      
      <View style={styles.keypad}>
        <View style={styles.row}>
            
        {keyTouchElements}
        </View>
      
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  keypad:{
    width: '100%',
    height: '100%',
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: '#1a66b5ff'
  },
  row: {
    flexWrap: "wrap",
    flexDirection: "row",
    height: '25%'
  },
  btnOuter: {
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  btn: {
    color: '#FFFFFF',
    backgroundColor: '#1a66b5ff',
    fontWeight: 'bold',
    fontSize: 24,
    display: 'flex',
    alignSelf: 'center'    
  }
})
export default Keypad
