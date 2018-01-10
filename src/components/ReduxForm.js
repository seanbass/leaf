import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { reduxForm, Field} from 'redux-form';

import { login, register } from '../redux/reducers/login.actions'; // importing our action

import RTextInput from './TextInput';

import { Button, FormLabel, FormInput } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements'

const { width } = Dimensions.get('window');

const Form = props => {

  const { handleSubmit } = props

  return (
  <View keyboardShouldPersistTaps={'handled'} style={styles.container}>
    <FormLabel labelStyle={styles.Label}>Email</FormLabel>
     <Field style={styles.field}
        name={'email'}
        component={RTextInput}
        autoCapitalize={'none'}
     />
      <FormLabel labelStyle={styles.Label}>Password</FormLabel>
      <Field style={styles.field}
        name={'password'}
        component={RTextInput}
        secureTextEntry={true}
        autoCapitalize={'none'}
       /> 
      <Button style={styles.ButtonStyle}
      onPress={handleSubmit(login)}
      title="LOG IN"
      containerViewStyle={{ borderRadius: 10}}
      borderRadius={10}
      />
      <Button style={styles.ButtonStyle}
      onPress={handleSubmit(register)}
      title="REGISTER"
      containerViewStyle={{ borderRadius: 10}}
      borderRadius={10}
      />
      <Text style={styles.ForgotPw}>Forgot Password?</Text>
      <Text style={styles.CreateAccount}>Create Account</Text>
  </View>
  );
}

export default reduxForm({ 
  form: 'login'
})(Form);

const styles = StyleSheet.create({
  container: { 
    //flexDirection: "row",
    //alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  field: {
    alignSelf: 'center',
    minHeight: 46,
    width: width - 30,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: 'white'
  },
  ButtonStyle: {
    //marginTop: 40,
    //backgroundColor: 'white',
    },
  ForgotPw: {
    marginTop: 20,
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  CreateAccount: {
    marginTop: 20,
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Label: {
    color: 'white',
  }
})