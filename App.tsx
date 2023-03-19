/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
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
