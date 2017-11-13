import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { reduxForm, Field} from 'redux-form';

import { login } from '../redux/reducers/login.actions'; // importing our action

import RTextInput from './TextInput';

import { Button } from 'react-native-elements';
import { FormLabel, FormInput } from 'react-native-elements'


const Form = props =>{

  const { handleSubmit } = props

  return (
  <View keyboardShouldPersistTaps={'handled'}>
    <FormLabel>Email</FormLabel>
     <FormInput 
        style={styles.field}
        name={'email'}
        component={RTextInput}
        autoCapitalize={'none'}
     />
      <FormLabel>Password</FormLabel>
      <FormInput
        style={styles.field}
        name={'password'}
        component={RTextInput}
        secureTextEntry={true}
        autoCapitalize={'none'}
      />
      <Button style={styles.ButtonStyle}
      raised
      large
      onPress={handleSubmit(login)} 
      title="Login"
      color="white"
      />
  </View>
  );
}

export default reduxForm({ 
  form: 'login'
})(Form);

const styles = StyleSheet.create({
  field: { 
    width: 300,
  },
  ButtonStyle: {
  }
})