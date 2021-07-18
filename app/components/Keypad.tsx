import React from 'react'
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';


const handleTouch = (keyPress: string): void => {
  console.log(keyPress)
}

function Keypad() {
  return (
    <SafeAreaView>
      <View style={styles.keypad}>
        <View style={styles.column}>
          <TouchableOpacity  
            style={styles.btnOuter} 
            onPress={()=>handleTouch('7')}>
              <Text style={styles.btn}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity  
            style={styles.btnOuter} 
            onPress={()=>handleTouch('4')}>
              <Text style={styles.btn}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btnOuter} 
            onPress={()=>handleTouch('1')}>
              <Text style={styles.btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity  
            style={styles.btnOuter} 
            onPress={()=>handleTouch('.')}>
              <Text style={styles.btn}>.</Text>
          </TouchableOpacity>
        </View>
        < View style={styles.column}>
        <TouchableOpacity  
          style={styles.btnOuter} 
          onPress={()=>handleTouch('8')}>
            <Text style={styles.btn}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity  
          style={styles.btnOuter} 
          onPress={()=>handleTouch('5')}>
            <Text style={styles.btn}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity  
          style={styles.btnOuter} 
          onPress={()=>handleTouch('2')}>
            <Text style={styles.btn}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity  
          style={styles.btnOuter} 
          onPress={()=>handleTouch('0')}>
            <Text style={styles.btn}>0</Text>
        </TouchableOpacity>
          
        </View>
        <View style={styles.column}>
        <TouchableOpacity 
          style={styles.btnOuter} 
          onPress={()=>handleTouch('9')}>
            <Text style={styles.btn}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity  
          style={styles.btnOuter} 
          onPress={()=>handleTouch('6')}>
            <Text style={styles.btn}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btnOuter} 
          onPress={()=>handleTouch('3')}>
            <Text style={styles.btn}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity  
          style={styles.btnOuter} 
          onPress={()=>handleTouch("neg")}>
            <Text style={styles.btn}>+/-</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity  
            style={styles.btnOuter} 
            onPress={()=>handleTouch("<")}>
              <Text style={styles.btn}>&lt;</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btnOuter} 
            onPress={()=>handleTouch("clr")}>
              <Text style={styles.btn}>clr</Text>
          </TouchableOpacity>
          <TouchableOpacity  
            style={styles.btnOuter} 
            onPress={()=>handleTouch("go")}>
              <Text style={styles.btn}>Go</Text>
          </TouchableOpacity>
          <TouchableOpacity  
            style={styles.btnOuter} 
            onPress={()=>handleTouch("go")}>
              <Text style={styles.btn}>Home</Text>
          </TouchableOpacity>
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
    justifyContent: 'space-evenly',
    backgroundColor: '#1a66b5ff'
  },
  column: {
    display:'flex',
    flexDirection:"column",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  btnOuter: {
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  btn: {
    color: '#FFFFFF',
    backgroundColor: '#1a66b5ff',
    fontWeight: 'bold',
    fontSize: 24,
    display: 'flex',
    alignSelf: 'center'
    // padding: 10
    
    
  }
})
export default Keypad
