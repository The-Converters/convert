import React from 'react'
import { 
  Text, 
  TouchableOpacity, 
  View, 
  StyleSheet 
} from 'react-native'

interface Props {
  options: string[],
  handler: () => void,
  isModalB?: boolean
}

const OptionsList: React.FC<Props> = ({
  options, handler, isModalB
}) => {

  const optionItems = options.map(option => (
    <TouchableOpacity 
      onPress={handler} 
      style={styles.option}
      key={option}
    >
      <Text style={styles.optionText}>
        {option}
      </Text>
    </TouchableOpacity>
  ))
  
  return (
    <View style={!isModalB 
      ? styles.optionList
      : [styles.optionList, styles.optionListB]} 
    >
      {optionItems}
    </View>
  )
}

const styles = StyleSheet.create({
  optionList:{
    position: 'absolute',
    top: 40,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: 'darkgrey',
    borderWidth: 1,
    borderRadius: 7
  },
  optionListB: {
    top: 160
  },
  option: {
    margin: 5
  },
  optionText: {
    fontSize: 22
  }
})

export default OptionsList
