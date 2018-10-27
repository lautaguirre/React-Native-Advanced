import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import Ball from './src/Ball';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Ball />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
