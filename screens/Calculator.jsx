import { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Calculator({navigation}) {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);
  
  const countOccurrences = (str, substr) => {
    return str.split(substr).length - 1;
  };

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const savedHistory = await AsyncStorage.getItem('calculatorHistory');
        if (savedHistory !== null) {
          setHistory(JSON.parse(savedHistory));
        }
      } catch (e) {
        console.error('Failed to load history', e);
      }
    };
    loadHistory();
  }, []);

  useEffect(() => {
    const saveHistory = async () => {
      try {
        await AsyncStorage.setItem('calculatorHistory', JSON.stringify(history));
      } catch (e) {
        console.error('Failed to save history', e);
      }
    };
    saveHistory();
  }, [history]);

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        const expression = text.replace(/÷/g, '/').replace(/×/g, '*');
        const result = Function(`'use strict'; return (${expression})`)();
        const newHistory = [`${text}=${result}`, ...history];
        setHistory(newHistory);
        setText(result.toString());
      } catch (error) {
        setText('Error');
      }
    } else if (value === 'C') {
      setText('');
    } else if (value === 'del') {
      setText(text.slice(0, -1));
    } else if (value === '^') {
      setText(text + '**');
    } else if (value === '()') {
      const openCount = countOccurrences(text, '(');
      const closeCount = countOccurrences(text, ')');
      
      if (text === '' || /[\+\-×÷(^]$/.test(text)) {
        setText(text + '(');
      } 
      else if (openCount > closeCount && /[0-9)]$/.test(text)) {
        setText(text + ')');
      }
      else {
        setText(text + '(');
      }
    } else {
      setText(text + value);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
            <TextInput style={styles.textBox}
            onChangeText={setText}
            value={text}
            placeholder="Enter"
            keyboardType= 'numeric'>
            </TextInput>
        </View>
        <View style={styles.numberContainer}>
          <TouchableOpacity style={styles.buttonclear} onPress={() => handleButtonPress('C')}>
            C
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOperation} onPress={() => handleButtonPress('()')}>
            ( )
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOperation} onPress={() => handleButtonPress('^')}>
            ^
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOperation} onPress={() => handleButtonPress('÷')}>
            ÷

          </TouchableOpacity>
        </View>
        <View style={styles.numberContainer}>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => handleButtonPress('1')}>
            1
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => handleButtonPress('2')}>
            2
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => handleButtonPress('3')}>
            3
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOperation} onPress={() => handleButtonPress('×')}>
            ×
          </TouchableOpacity>
        </View>
        <View style={styles.numberContainer}>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => handleButtonPress('4')}>
            4
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => handleButtonPress('5')}>
            5
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => handleButtonPress('6')}>
            6
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOperation} onPress={() => handleButtonPress('-')}>
            -
          </TouchableOpacity>
        </View>
        <View style={styles.numberContainer}>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => handleButtonPress('7')}>
            7
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => handleButtonPress('8')}>
            8
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => handleButtonPress('9')}>
            9
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOperation} onPress={() => handleButtonPress('+')}>
            +
          </TouchableOpacity>
        </View>
        <View style={styles.numberContainer}>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => handleButtonPress('0')}>
            0
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => handleButtonPress('.')}>
            .
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNumber} onPress={() => handleButtonPress('del')}>
            del
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOperation} onPress={() => handleButtonPress('=')}>
            =
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonText}
               onPress={() => navigation.navigate('Guidance')}>
              Guide
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonText}
              onPress={() => navigation.navigate('History', { history })}>
                History
              </TouchableOpacity>
            <TouchableOpacity style={styles.buttonText}
              onPress={() => navigation.navigate('CurrencyConverter')}>
                Currency
              </TouchableOpacity>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    width: '100%'
  },
  buttonText: {
    borderWidth: 1,
    fontSize: 25,
    borderColor: 'black',
    padding: 15,
    textAlign: 'center',
    backgroundColor: 'orange',
    width: '130px'
  },
  textBox: {
    fontSize: 70,
    backgroundColor: '#16171b',
    width: '390px', 
    height: '200px',
    color: 'white',
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    backgroundColor: 'black',
    height: '116.75px',
    color: 'white',
    fontSize: 50,
    fontFamily: 'Sans-Serif'
  },
  buttonNumber:{
    marginTop: 25,
    width: '90px',
    height: '85px',
    backgroundColor: '#380000',
    borderRadius: '50%',
    justifyContent: 'center'
  },
  buttonOperation: {
    marginTop: 25,
    backgroundColor: '#6f0101',
    borderRadius: '50%',
    width: '90px',
    height: '85px',
    justifyContent: 'center'
  },
  buttonclear:{
    marginTop: 25,
    backgroundColor: '#a50303',
    borderRadius: '50%',
    width: '90px',
    height: '85px',
    justifyContent: 'center'
  }
});