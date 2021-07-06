import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';


const handleTouch = keyPress => {
  console.log(keyPress)
}
function Keypad() {
  return (
    <SafeAreaView>
      <View style={styles.keypad}>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>handleTouch(7)}><Text style={styles.btn}>7
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTouch(8)}><Text style={styles.btn}>8
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTouch(9)}><Text style={styles.btn}>9
            </Text></TouchableOpacity>
        </View>
        < View style={styles.row}>
          <TouchableOpacity onPress={()=>handleTouch(4)}><Text style={styles.btn}>4
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTouch(5)}><Text style={styles.btn}>5
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTouch(6)}><Text style={styles.btn}>6
            </Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>handleTouch(1)}><Text style={styles.btn}>1
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTouch(2)}><Text style={styles.btn}>2
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTouch(3)}><Text style={styles.btn}>3
            </Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>handleTouch("neg")}><Text style={styles.btn}>
          +/-</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTouch(0)}><Text style={styles.btn}>0
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTouch('.')}><Text style={styles.btn}>.
            </Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>handleTouch("<")}><Text style={styles.btn}>&lt;
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTouch("clr")}><Text style={styles.btn}>clr
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>handleTouch("go")}><Text style={styles.btn}>Go
            </Text></TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  keypad:{
    width: '100%',
    height: '55%',
    display:'flex',
    justifyContent: 'space-evenly',
    alignItems: 'stretch'
  },
  row: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-evenly',
    width: '100%',
    
  },
  btn: {
    color: '#FFFFFF',
    backgroundColor: '#1a66b5ff',
    fontWeight: 'bold',
    fontSize: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Keypad
