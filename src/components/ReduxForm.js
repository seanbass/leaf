import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { reduxForm, Field} from 'redux-form';

import { login } from '../redux/reducers/login.actions'; // importing our action

import RTextInput from './TextInput';

const Form = props =>{

  const { handleSubmit } = props

  return (
  <View keyboardShouldPersistTaps={'handled'}>
      <Text>Email</Text>
      <Field
        style={styles.field}
        name={'email'}
        component={RTextInput}
        autoCapitalize={'none'}
      />
      <Text>Password</Text>
      <Field
        style={styles.field}
        name={'password'}
        component={RTextInput}
        secureTextEntry={true}
        autoCapitalize={'none'}
      />
      <Button onPress={handleSubmit(login)} title="Submit"/>
  </View>
  );
}

export default reduxForm({ 
  form: 'login'
})(Form);

const styles = StyleSheet.create({
  field: { 
    width: 300,
    backgroundColor: '#FDD7E4',
  }
})