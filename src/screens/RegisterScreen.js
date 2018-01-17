import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Form from '../components/ReduxForm'
import { SocialIcon } from 'react-native-elements'

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    header: 'Register',
  };

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Log in to access your device.</Text>
        <Form />
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e9b54',
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: 240,
    width: 140,
    justifyContent: "flex-start",
    //marginBottom: 20
  },
  title: {
    fontSize: 40,
    color: 'white',
  },
  subtitle: {
    marginBottom: 100,
    fontSize: 20,
    color: 'white',
  }
});