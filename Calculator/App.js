import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState('0');
  const [result, setResult] = useState('0');

  const calcSum = () =>{
    setResult((parseFloat(number1)+parseFloat(number2)).toString());
  }
  const calcMinus = () =>{
    setResult((parseFloat(number1)-parseFloat(number2)).toString());
  }
  const calcMutiply = () =>{
    setResult((parseFloat(number1)*parseFloat(number2)).toString());
  }
  const calcDevision = () =>{
    setResult((parseFloat(number1)/parseFloat(number2)).toString());
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <View style={styles.row} >
        <View style={styles.textView}>
          <Text style={styles.text}>Number1:</Text>
        </View>
          <TextInput  placeholder='0' style={styles.textInput} keyboardType={'numeric'}
          value={number1}
          onChangeText={text=> setNumber1(text)}></TextInput>
   
      </View>
      <View style={styles.row} >
        <View style={styles.textView}>
          <Text style={styles.text}>Number2:</Text>
        </View>
        
          <TextInput placeholder='0' style={styles.textInput} keyboardType='numeric'
             value={number2}
             onChangeText={text=> setNumber2(text)}
          ></TextInput>
       
      </View>

      <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={calcSum}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> calcMinus()} ><Text style={styles.buttonText}>-</Text></TouchableOpacity>         
          <TouchableOpacity style={styles.button} onPress={()=> calcMutiply()}><Text style={styles.buttonText}>*</Text></TouchableOpacity>      
          <TouchableOpacity style={styles.button} onPress={()=> calcDevision()}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <View style={styles.textView}>
          <Text style={styles.text}>Result:</Text>
        </View>
       
          <TextInput placeholder="0" style={styles.textInput} editable={false} value={result}></TextInput>
      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent:'center',
  },
  title:{
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom:20
  },
  row: {
    flexDirection: 'row',
    marginTop: 5
  },
  textView: {
    backgroundColor: '#CDC9A5',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 10,
    width:100,
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    elevation: 3,
  }, 
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#54FF9F',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
