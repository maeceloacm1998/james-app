import {StatusBar, View} from "react-native"
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import { theme } from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
        <Routes />
      </View>
    </ThemeProvider>
  );
}
