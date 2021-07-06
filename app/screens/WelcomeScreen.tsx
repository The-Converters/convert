import React from 'react'
import { View, Text } from 'react-native'

interface Props {
  title: string;
}

const WelcomeScreen: React.FC<Props> = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default WelcomeScreen
