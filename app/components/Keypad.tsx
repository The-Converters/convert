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
import icons from '../config/icons';

interface Props {
  conversion?: string,
  keys: string[],
  handleTouch: (key: string) => void
  forHomeScreen?: boolean,
  mode: 'light' | 'dark'
}

const Keypad: React.FC<Props> = ({conversion = 'temp', keys, handleTouch, forHomeScreen, mode}) => {
  const keyTouchElements: React.ReactElement[] = keys.map((key, index) => (
    <TouchableOpacity
      key={index} 
      style={[
        {backgroundColor: colors[conversion].dark},
        {borderColor: ((index + 1) % 4 === 0) && !forHomeScreen ? colors[conversion].dark : colors[conversion].light},
        styles.btnOuter,
        ((index + 1) % 4 === 0) && !forHomeScreen && {backgroundColor: colors[conversion].light}
      ]}
      onPress={()=>handleTouch(key)}>
      {((index + 1) % 4 === 0 && !forHomeScreen || forHomeScreen)
        ?
        <Icon 
          name={icons[key]} 
          type={'font-awesome-5'} 
          solid
          color={colors.textMode.dark} 
          size={30}
        />      
        :
        <Text 
          style={[
            styles.btn,
            forHomeScreen && styles.btnHome,
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
    borderWidth: 1,
    borderStyle: 'solid',
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  btn: {
    color: colors.textMode.dark,
    fontWeight: 'bold',
    fontSize: 24,
    display: 'flex',
    alignSelf: 'center'    
  },
  btnHome: {
    fontSize: 15,
  },
})
export default Keypad
