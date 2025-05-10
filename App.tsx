import { SafeAreaView, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider/>
      <Navigation/>
    </SafeAreaProvider>
  );
}