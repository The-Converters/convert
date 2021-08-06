import React from 'react'
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

interface Props {
  keys: string[],
  handleTouch: (key: string) => void
  forHomeScreen?: boolean
}

const Keypad: React.FC<Props> = ({keys, handleTouch, forHomeScreen}) => {
  const keyTouchElements = keys.map((key, index) => (
    <TouchableOpacity
      key={index} 
      style={[
        styles.btnOuter, 
        ((index + 1) % 4 === 0) && !forHomeScreen && styles.rightColumnOuter
      ]}
      onPress={()=>handleTouch(key)}>
      <Text 
        style={[
          styles.btn, 
          forHomeScreen && styles.btnHome, 
          ((index + 1) % 4 === 0) && styles.rightColumn
        ]}
      >
        {key}
      </Text>
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
    
    fontWeight: 'bold',
    fontSize: 24,
    display: 'flex',
    alignSelf: 'center'    
  },
  rightColumn: {
    color: '#FFFFFF',
  },
  rightColumnOuter: {
    backgroundColor: "dodgerblue",
    color: '#1a66b5ff', 
  },
  btnHome: {
    fontSize: 15,
  }
})
export default Keypad
