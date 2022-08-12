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
            <View style={styles.controlBox}>
                <TouchableOpacity
                    onPress={handleTouch}>
                    <Icon
                        name={'home'}
                        type={'font-awesome-5'}
                        solid
                        color={colors.textMode.dark}
                        size={42}
                    />
                </TouchableOpacity>       
                <Text style={{color: colors.textMode[mode], fontSize: 20}}>
                    Team Convertron 
                </Text>            

                <Icon
                    name={'github'}
                    type={'font-awesome-5'}
                    color={colors.textMode.dark}
                    size={44}
                    onPress={() => Linking.openURL('https://github.com/The-Converters/convert')}
                />
                </View>
                <View style={styles.devWrapper}>
                    <Image 
                        source={require('../../assets/gmall.png')}
                        style={styles.mugshot}
                    />
                    <Text style={[styles.name, {color: colors.textMode[mode]}]}>
                        Greg Mall
                    </Text>
                    <Text style={[styles.name, {color: colors.textMode[mode]}]}
                        onPress={() => Linking.openURL('https://github.com/gregmall')}>
                         GitHub
                    </Text>
                    <Text style={[styles.name, {color: colors.textMode[mode]}]}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/greg-mall-3032771b1/')}>
                         LinkedIn
                    </Text>
                 
                </View>
                <View style={styles.devWrapper}>
                    <View style={styles.namePhoto}>
                        <Image source={require('../../assets/jerud.jpeg')}
                            style={styles.mugshot} 
                        />
                    <Text style={[styles.name, {color: colors.textMode[mode]}]}>
                            Jerud Moyer
                        </Text>
                    </View>
                    <View style={styles.devText}>
                    
                        <Text style={[styles.name, {color: colors.textMode[mode]}]}
                            onPress={() => Linking.openURL('https://github.com/Jerud-Moyer')}>
                            GitHub
                        </Text>
                        <Text style={[styles.name, {color: colors.textMode[mode]}]}
                            onPress={() => Linking.openURL('https://jerud-moyer.dev/')}>
                            Portfolio
                        </Text>
                 
                    </View>
                </View>
                <View style={styles.devWrapper}>
                    <Image source={require('../../assets/shawn.jpeg')}
                        style={styles.mugshot}
                    />
                    <Text style={[styles.name, {color: colors.textMode[mode]}]}>
                        Shawn Carpenter
                    </Text>
                    <Text style={[styles.name, {color: colors.textMode[mode]}]}
                        onPress={() => Linking.openURL('https://github.com/ShawnCarpenter')}>
                         GitHub
                    </Text>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      },
    controlBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',       
        alignItems: 'center',
        marginBottom: '10%'
    },
    devWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '20%',
        margin: 20,
        
    },
    devText:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '20%',
        margin: 20,
    },
    namePhoto: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        maxWidth: '100%',
        margin: 20,
      

    },
    mugshot: {
        maxWidth: '46%',
        height: '100%',
        borderRadius: 100,
        marginRight: 25,
        marginLeft: 10
    },
    name: {
        fontSize: 20,
    },

})

export default AboutScreen
