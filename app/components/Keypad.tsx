import React from 'react'
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import colors from '../config/colors';

interface Props {
  conversion?: string,
  keys: string[],
  handleTouch: (key: string) => void
  forHomeScreen?: boolean
}

const Keypad: React.FC<Props> = ({conversion = 'temp', keys, handleTouch, forHomeScreen}) => {
  const keyTouchElements: React.ReactElement[] = keys.map((key, index) => (
    <TouchableOpacity
      key={index} 
      style={[
        {backgroundColor: colors[conversion].regular},
        {borderColor: colors.grey.light},
        styles.btnOuter,
        ((index + 1) % 4 === 0) && !forHomeScreen && {backgroundColor: colors[conversion].light}
      ]}
      onPress={()=>handleTouch(key)}>
      {(index === (keys.length - 1) && !forHomeScreen)
        ?
        <Icon name={key} color={'#FFFFFF'} size={36}/>      
        :
        <Text 
          style={[
            styles.btn,
            forHomeScreen && styles.btnHome, 
            ((index + 1) % 4 === 0) && styles.rightColumn
          ]}
        >
          {key}
        </Text>
      }
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
    backgroundColor: '#1a66b5',
  },
  row: {
    flexWrap: "wrap",
    flexDirection: "row",
    height: '25%'
  },
  btnOuter: {
    // borderColor: 'white',
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
  btnHome: {
    fontSize: 15,
  },
})
export default Keypad
