import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { useHistory } from 'react-router-native'

const WelcomeScreen = () => {
  const history = useHistory()
  return (
    <View>
      <Text>WTF</Text>
      <TouchableOpacity onPress = {()=>history.push('/convert')}><Text>Do Something</Text></TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen
