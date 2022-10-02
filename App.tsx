/* eslint-disable no-console */
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState, useCallback } from 'react';
import { View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as Font from 'expo-font';
import { Routes } from './src/routes';
import { theme } from './src/global/styles/theme';
import { ChallengesProvider } from './src/contexts/ChallengesContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <ChallengesProvider>
        <View
          onLayout={onLayoutRootView}
          style={{
            flex: 1,
            marginTop: StatusBar.currentHeight
          }}>
          <Routes />
        </View>
      </ChallengesProvider>
      <StatusBar translucent barStyle="light-content" />
    </ThemeProvider>
  );
}
