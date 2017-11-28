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
      <Image style={styles.logo} source={require("../../assets/images/FH3.png")}/>
        <Form />
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: 240,
    width: 140,
    justifyContent: "flex-start",
    //marginBottom: 20
  },
});