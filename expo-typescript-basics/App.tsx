import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from './src/routes';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar style="auto" />
        <Routes />
    </GestureHandlerRootView>
  );
}

