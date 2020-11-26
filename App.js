import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Design from './src/screens/Design'
/*import Routing from './src/router.js';*/

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Design />
    </>
  );
}
