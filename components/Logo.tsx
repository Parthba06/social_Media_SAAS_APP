import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logoIcon}>
        <Text style={styles.logoText}>S</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: 40,
    height: 40,
  },
  logoIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
