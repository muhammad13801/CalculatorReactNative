import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Guidance from './screens/Guidance';
import Calculator from './screens/Calculator';
import History from './screens/History';
import CurrencyConverter from './screens/CurrencyConverter';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Calculator" component={Calculator} options={{headerShown: false}}/>
            <Stack.Screen name="Guidance" component={Guidance}/>
            <Stack.Screen name="History" component={History}/>
            <Stack.Screen name="CurrencyConverter" component={CurrencyConverter} options={{title: "محول العملات"}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});