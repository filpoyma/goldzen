import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Logo: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/bootLogo.png')} style={styles.image} />
      </View>
      <Text style={styles.brandName}>GOLDZEN</Text>
      <Text style={styles.subtitle}>SELECT JEWELRY TYPE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  logoContainer: {
    marginBottom: 12,
  },
  image: {
    width: 50,
    height: 50,
  },
  brandName: {
    fontSize: 32,
    fontWeight: '600',
    color: '#ac864a',
    letterSpacing: 2,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#a8a38f',
    letterSpacing: 1.5,
  },
});
