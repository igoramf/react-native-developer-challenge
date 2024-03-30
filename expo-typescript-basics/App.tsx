import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from './src/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryclient } from './queryClient';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryclient}>
        <StatusBar style="auto" />
        <Routes />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

