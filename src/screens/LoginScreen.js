import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Form from '../components/ReduxForm'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Form/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: { 
    fontSize: 25,
    textAlign: "center",
    backgroundColor: '#FDD7E4',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center"
  }
});