import { StyleSheet, Text, View } from 'react-native';

export default function Guidance(){
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to calculator app.</Text>
        <Text style={styles.description}>This is a basic calculator app.</Text>
        <Text style={styles.description}>It performs the following operations:</Text>
        <Text style={styles.operations}>+ - × ÷ ^ ( )</Text>
        <Text style={styles.description}>It also has a history for completed operations.</Text>
        <Text style={styles.description}>The app includes a currency converter page that converts between JOD and ILS using an API.</Text>
        <Text style={styles.title}>How this app work?</Text>
        <Text style={styles.description}>1. Press button <Text style={styles.buttonName}> ←</Text> at the top left.</Text>
        <Text style={styles.description}>2. Start putting numbers and operations as you want</Text>
        <Text style={styles.description}>3. Press on <Text style={styles.buttonName}>=</Text> to see result.</Text>
        <Text style={styles.description}>4. And There you go ;)</Text>
        <Text style={styles.description}>Press button <Text style={styles.buttonName}>History</Text> to see history.</Text>
        <Text style={styles.description}>If you want guidance press on the button <Text style={styles.buttonName}>guide</Text>.</Text>
        <Text style={styles.description}>Press on the button <Text style={styles.buttonName}>Currency</Text> to use currency.</Text>
        <Text style={[styles.description, {marginTop: 40}]}>Made by: </Text>
        <Text style={styles.developer}>Muhammad AbuJheisha</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer:{
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  description: {
    marginTop: 10,
    fontSize: 15,
  },
  operations: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  developer:{
    fontSize: 15,
    fontWeight: 'bold',
  },
});