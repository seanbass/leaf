import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { reduxForm, Field} from 'redux-form';

import { login } from '../redux/reducers/login.actions'; // importing our action

import RTextInput from './TextInput';

import { Button, FormLabel, FormInput } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements'

const { width } = Dimensions.get('window');

const Form = props => {

  const { handleSubmit } = props

  return (
  <View keyboardShouldPersistTaps={'handled'} style={styles.container}>
    <FormLabel>Email</FormLabel>
     <Field style={styles.field}
        name={'email'}
        component={RTextInput}
        autoCapitalize={'none'}
     />
      <FormLabel>Password</FormLabel>
      <Field
        style={styles.field}
        name={'password'}
        component={RTextInput}
        secureTextEntry={true}
        autoCapitalize={'none'}
       /> 
      <SocialIcon style={styles.ButtonStyle}
      button
      raised
      onPress={handleSubmit(login)}
      title="LOG IN"
      iconColor='red'
      light='true'
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
    color: 'white',
    //Form.name: 'white',
  },
  ButtonStyle: {
    marginTop: 40,
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
  }
})