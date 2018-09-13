import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Component/Judul';
import Login from './SignUp/Login';      

type Props = {};
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
  