/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
//import SignInScreen from './src/screens/SignInScreen';
//import SignUpScreen from './src/screens/SignUpScreen';
//import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
//import ConfirmPasswordScreen from './src/screens/ConfirmPasswordScreen';
import NewPasswordScreen from "./src/screens/NewPasswordScreen";
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <NewPasswordScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'F9FBFC',
  },
});

export default App;
