import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyA6awzb0OlJY4MkFbAb4C2X0ivSr0a0HSc",
      authDomain: "one-time-password-9b9a6.firebaseapp.com",
      databaseURL: "https://one-time-password-9b9a6.firebaseio.com",
      projectId: "one-time-password-9b9a6",
      storageBucket: "one-time-password-9b9a6.appspot.com",
      messagingSenderId: "739144802984"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
