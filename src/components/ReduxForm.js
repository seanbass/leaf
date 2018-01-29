import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { reduxForm, Field} from 'redux-form';
import PropTypes from 'prop-types';

import { login, register } from '../redux/reducers/login.actions'; // importing our action

import RTextInput from './TextInput';

import { Button, FormLabel, FormInput } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements'

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';




const { width } = Dimensions.get('window');

const Form = props => {

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
      onPress={props.handleLogin}
      title="LOG IN"
      containerViewStyle={{ borderRadius: 10, margin: 5, marginTop: 25}}
      borderRadius={10}
      raised={true}
      backgroundColor={"#fff"}
      color={"#000"}
      />
      <Button style={styles.ButtonStyle}
      //onPress={props.handleRegister} - We need to make this open a new screen
      title="REGISTER"
      containerViewStyle={{ borderRadius: 10, margin: 5}}
      borderRadius={10}
      raised={true}
      backgroundColor={"#fff"}
      color={"#000"}
      />
      <Text style={styles.ForgotPw}>Forgot Password?</Text>
  </View>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired
}


const mapDispatchToProps = ( dispatch ) => bindActionCreators({
  handleLogin: () => login(),
  handleRegister: () => register(),
}, dispatch)

Form = connect(null, mapDispatchToProps)(Form) //docs suggest to do it this way

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