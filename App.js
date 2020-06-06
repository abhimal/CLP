import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNav from './src/route/drawer';

export default function App() {
  return (
    <DrawerNav/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
