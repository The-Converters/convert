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

            <View style={styles.nav}>
                <Icon
                    name={'github'}
                    type={'font-awesome-5'}
                    color={colors.textMode[mode]}
                    size={30}
                    onPress={() => Linking.openURL('https://github.com/The-Converters/convert')}
                />
            </View>
     
            <View style={styles.devBox}>
                <View>
                    <Text style={[styles.name, {color: colors.textMode[mode]}]}>Greg</Text>
                    <Text style={{color: colors.textMode[mode]}}>words or a link</Text>
                </View>
                <Image 
                    source={require('../../assets/gmall.png')}
                    style={styles.mugshot}/>
            </View>
            <View style={styles.devBox}>
                <Image source={require('../../assets/jerud.jpeg')}
                style={styles.mugshot} />
                <View >
                    <Text style={[styles.name, {color: colors.textMode[mode]}]}>Jerud</Text>
                    <Text style={{color: colors.textMode[mode]}}>words or a link</Text>
                </View>
            </View>
            <View style={styles.devBox}>
                <View >
                    <Text style={[styles.name, {color: colors.textMode[mode]}]}>Shawn</Text>
                    <Text style={{color: colors.textMode[mode]}}>words or a link</Text>
                </View>
                <Image source={require('../../assets/shawn.jpeg')}
                    style={styles.mugshot}/>
            </View>
            <View style={styles.nav}>
                <Icon
                    name={'home'}
                    type={'font-awesome-5'}
                    solid
                    color={colors.textMode[mode]}
                    size={30}
                    onPress={handleTouch}
                />
            </View>
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
    devBox: {
        width: '85%',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 30
    },
    mugshot: {
        height: '100%',
        maxWidth: '50%',
        borderRadius: 100,
    },
    nav: {
        flex: .5
    }
})

export default AboutScreen
