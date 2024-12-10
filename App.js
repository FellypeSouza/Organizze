import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './pages/register/Register';

export default function App() {
  return (
    <View>
      <Register/>
      <StatusBar style="auto" />
    </View>
  );
}
