import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { reduxForm, Field} from 'redux-form';

import { login } from '../redux/reducers/login.actions'; // importing our action

import RTextInput from './TextInput';

import { Button, FormLabel, FormInput } from 'react-native-elements'

const { width } = Dimensions.get('window');

const Form = props => {

  const { handleSubmit } = props

  return (
  <View keyboardShouldPersistTaps={'handled'} style={styles.container}>
    <FormLabel>Email</FormLabel>
     <Field
        style={styles.field}
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
      <Button style={styles.ButtonStyle}
        raised
        large
        onPress={handleSubmit(login)}
        title="                           LOGIN                           "
        color="white"
      />
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
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  ButtonStyle: {
    position: 'absolute',
    marginTop: 20,
  }
})