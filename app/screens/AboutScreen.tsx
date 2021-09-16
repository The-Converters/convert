import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, Linking } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import colors from '../config/colors'
import { Icon } from 'react-native-elements'
import { Params } from '../../types'

type Props = NativeStackScreenProps<Params, 'About'>
const AboutScreen: React.FC<Props>  = ({route, navigation}) => {
    const { mode } = route.params

    const handleTouch = () =>{
        navigation.navigate('Welcome')
    }
    return (
        <View>
        <View style={[styles.container, {backgroundColor: colors.background[mode]}]}>

        
            <Text>Lets talk about us</Text>
            
            <Icon
                name={'github'}
                type={'font-awesome-5'}
                color={colors.textMode.dark}
                size={30}
                onPress={() => Linking.openURL('https://github.com/The-Converters/convert')}
            />
     
            <Image 
                source={require('../../assets/gmall.png')}
                style={styles.mugshot}/>
            <Image source={require('../../assets/jerud.jpeg')}
                style={styles.mugshot} />
            <Image source={require('../../assets/shawn.jpeg')}
                style={styles.mugshot}/>
            <TouchableOpacity
                onPress={handleTouch}>
                <Icon
                    name={'home'}
                    type={'font-awesome-5'}
                    solid
                    color={colors.textMode.dark}
                    size={30}
                />
            
                <Text>STUFF</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
      },
    mugshot: {
        maxWidth: '52%',
        height: '25%',
        borderRadius: 100,
    }
})

export default AboutScreen
