import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';


const handleTouch = () => {
  console.log("Boop")
}
function Keypad() {
  return (
    <SafeAreaView>
      <View style={styles.keypad}>
      <View style={styles.row}>
          <TouchableOpacity onPress={handleTouch}><Text>1
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={handleTouch}><Text>2
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={handleTouch}><Text>3
            </Text></TouchableOpacity>
          </View>
          < View style={styles.row}>
          <TouchableOpacity onPress={handleTouch}><Text>4
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={handleTouch}><Text>5
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={handleTouch}><Text>6
            </Text></TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity onPress={handleTouch}><Text>7
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={handleTouch}><Text>8
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={handleTouch}><Text>9
            </Text></TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity onPress={handleTouch}><Text>
          +/-</Text></TouchableOpacity>
          <TouchableOpacity onPress={handleTouch}><Text>0
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={handleTouch}><Text>.
            </Text></TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity onPress={handleTouch}><Text>&lt;
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={handleTouch}><Text>clr
            </Text></TouchableOpacity>
          <TouchableOpacity onPress={handleTouch}><Text>Go
            </Text></TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  keypad:{
    display:'flex',
  },
  row: {
    display:'flex',
    flexDirection:'row',
  }
})
export default Keypad
