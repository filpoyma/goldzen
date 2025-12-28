import { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BootSplash from 'react-native-bootsplash';

import { isLocalDev } from './src/constants/platform.constants.ts';
import { Logo } from './src/components/Logo';
import { JewelryTypeCarousel } from './src/components/JewelryTypeCarousel';
import { jewelryItems } from './src/data/jewelry.data';

function App() {
  //const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = true;

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#000000',
    },
  };

  if (isLocalDev) require('./reactotroneConfig');
  useEffect(() => {
    setTimeout(() => {
      BootSplash.hide({ fade: true }).catch(console.error);
    }, 1000);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <Logo />
      <JewelryTypeCarousel items={jewelryItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default App;
